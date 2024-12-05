# `dataOciCloudGuardDetectorRecipes` Submodule <a name="`dataOciCloudGuardDetectorRecipes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDetectorRecipes <a name="DataOciCloudGuardDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes oci_cloud_guard_detector_recipes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipes(scope Construct, id *string, config DataOciCloudGuardDetectorRecipesConfig) DataOciCloudGuardDetectorRecipes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig">DataOciCloudGuardDetectorRecipesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig">DataOciCloudGuardDetectorRecipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly">ResetResourceMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceMetadataOnly` <a name="ResetResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly"></a>

```go
func ResetResourceMetadataOnly()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudGuardDetectorRecipes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudGuardDetectorRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDetectorRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection">DetectorRecipeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput">ResourceMetadataOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly">ResourceMetadataOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DetectorRecipeCollection`<sup>Required</sup> <a name="DetectorRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection"></a>

```go
func DetectorRecipeCollection() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter"></a>

```go
func Filter() DataOciCloudGuardDetectorRecipesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceMetadataOnlyInput`<sup>Optional</sup> <a name="ResourceMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput"></a>

```go
func ResourceMetadataOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceMetadataOnly`<sup>Required</sup> <a name="ResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly"></a>

```go
func ResourceMetadataOnly() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDetectorRecipesConfig <a name="DataOciCloudGuardDetectorRecipesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ResourceMetadataOnly: interface{},
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly">ResourceMetadataOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#filter DataOciCloudGuardDetectorRecipes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceMetadataOnly`<sup>Optional</sup> <a name="ResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly"></a>

```go
ResourceMetadataOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}.

---

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollection <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings {

}
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings {

}
```


### DataOciCloudGuardDetectorRecipesFilter <a name="DataOciCloudGuardDetectorRecipesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

&dataocicloudguarddetectorrecipes.DataOciCloudGuardDetectorRecipesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```go
func IsPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules"></a>

```go
func CandidateResponderRules() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```go
func IsPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```go
func CandidateResponderRules() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType">DetectorRecipeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules">DetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules">EffectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId">SourceDetectorRecipeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRecipeType`<sup>Required</sup> <a name="DetectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType"></a>

```go
func DetectorRecipeType() *string
```

- *Type:* *string

---

##### `DetectorRules`<sup>Required</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules"></a>

```go
func DetectorRules() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveDetectorRules`<sup>Required</sup> <a name="EffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules"></a>

```go
func EffectiveDetectorRules() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SourceDetectorRecipeId`<sup>Required</sup> <a name="SourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId"></a>

```go
func SourceDetectorRecipeId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipesDetectorRecipeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a>

---


### DataOciCloudGuardDetectorRecipesFilterList <a name="DataOciCloudGuardDetectorRecipesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudGuardDetectorRecipesFilterOutputReference <a name="DataOciCloudGuardDetectorRecipesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipes"

dataocicloudguarddetectorrecipes.NewDataOciCloudGuardDetectorRecipesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



