# `dataOciMarketplacePublication` Submodule <a name="`dataOciMarketplacePublication` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplacePublication <a name="DataOciMarketplacePublication" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication oci_marketplace_publication}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublication(scope Construct, id *string, config DataOciMarketplacePublicationConfig) DataOciMarketplacePublication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig">DataOciMarketplacePublicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig">DataOciMarketplacePublicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplacePublication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.DataOciMarketplacePublication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.DataOciMarketplacePublication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.DataOciMarketplacePublication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.DataOciMarketplacePublication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMarketplacePublication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMarketplacePublication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMarketplacePublication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplacePublication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.icon">Icon</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList">DataOciMarketplacePublicationIconList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.isAgreementAcknowledged">IsAgreementAcknowledged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.listingType">ListingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.longDescription">LongDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList">DataOciMarketplacePublicationPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.supportContacts">SupportContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList">DataOciMarketplacePublicationSupportContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.supportedOperatingSystems">SupportedOperatingSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList">DataOciMarketplacePublicationSupportedOperatingSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.publicationIdInput">PublicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.publicationId">PublicationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.icon"></a>

```go
func Icon() DataOciMarketplacePublicationIconList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList">DataOciMarketplacePublicationIconList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAgreementAcknowledged`<sup>Required</sup> <a name="IsAgreementAcknowledged" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.isAgreementAcknowledged"></a>

```go
func IsAgreementAcknowledged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ListingType`<sup>Required</sup> <a name="ListingType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.listingType"></a>

```go
func ListingType() *string
```

- *Type:* *string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.longDescription"></a>

```go
func LongDescription() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.packageDetails"></a>

```go
func PackageDetails() DataOciMarketplacePublicationPackageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList">DataOciMarketplacePublicationPackageDetailsList</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.shortDescription"></a>

```go
func ShortDescription() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportContacts`<sup>Required</sup> <a name="SupportContacts" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.supportContacts"></a>

```go
func SupportContacts() DataOciMarketplacePublicationSupportContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList">DataOciMarketplacePublicationSupportContactsList</a>

---

##### `SupportedOperatingSystems`<sup>Required</sup> <a name="SupportedOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.supportedOperatingSystems"></a>

```go
func SupportedOperatingSystems() DataOciMarketplacePublicationSupportedOperatingSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList">DataOciMarketplacePublicationSupportedOperatingSystemsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `PublicationIdInput`<sup>Optional</sup> <a name="PublicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.publicationIdInput"></a>

```go
func PublicationIdInput() *string
```

- *Type:* *string

---

##### `PublicationId`<sup>Required</sup> <a name="PublicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.publicationId"></a>

```go
func PublicationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplacePublicationConfig <a name="DataOciMarketplacePublicationConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

&dataocimarketplacepublication.DataOciMarketplacePublicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PublicationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.publicationId">PublicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication#publication_id DataOciMarketplacePublication#publication_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PublicationId`<sup>Required</sup> <a name="PublicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationConfig.property.publicationId"></a>

```go
PublicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication#publication_id DataOciMarketplacePublication#publication_id}.

---

### DataOciMarketplacePublicationIcon <a name="DataOciMarketplacePublicationIcon" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIcon"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIcon.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

&dataocimarketplacepublication.DataOciMarketplacePublicationIcon {

}
```


### DataOciMarketplacePublicationPackageDetails <a name="DataOciMarketplacePublicationPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

&dataocimarketplacepublication.DataOciMarketplacePublicationPackageDetails {

}
```


### DataOciMarketplacePublicationPackageDetailsEula <a name="DataOciMarketplacePublicationPackageDetailsEula" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEula"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEula.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

&dataocimarketplacepublication.DataOciMarketplacePublicationPackageDetailsEula {

}
```


### DataOciMarketplacePublicationPackageDetailsOperatingSystem <a name="DataOciMarketplacePublicationPackageDetailsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

&dataocimarketplacepublication.DataOciMarketplacePublicationPackageDetailsOperatingSystem {

}
```


### DataOciMarketplacePublicationSupportContacts <a name="DataOciMarketplacePublicationSupportContacts" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

&dataocimarketplacepublication.DataOciMarketplacePublicationSupportContacts {

}
```


### DataOciMarketplacePublicationSupportedOperatingSystems <a name="DataOciMarketplacePublicationSupportedOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

&dataocimarketplacepublication.DataOciMarketplacePublicationSupportedOperatingSystems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplacePublicationIconList <a name="DataOciMarketplacePublicationIconList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationIconList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationIconList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationIconOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationIconOutputReference <a name="DataOciMarketplacePublicationIconOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationIconOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationIconOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.contentUrl">ContentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIcon">DataOciMarketplacePublicationIcon</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.contentUrl"></a>

```go
func ContentUrl() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIconOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationIcon
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationIcon">DataOciMarketplacePublicationIcon</a>

---


### DataOciMarketplacePublicationPackageDetailsEulaList <a name="DataOciMarketplacePublicationPackageDetailsEulaList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationPackageDetailsEulaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationPackageDetailsEulaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationPackageDetailsEulaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationPackageDetailsEulaOutputReference <a name="DataOciMarketplacePublicationPackageDetailsEulaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationPackageDetailsEulaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationPackageDetailsEulaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.eulaType">EulaType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.licenseText">LicenseText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEula">DataOciMarketplacePublicationPackageDetailsEula</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EulaType`<sup>Required</sup> <a name="EulaType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.eulaType"></a>

```go
func EulaType() *string
```

- *Type:* *string

---

##### `LicenseText`<sup>Required</sup> <a name="LicenseText" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.licenseText"></a>

```go
func LicenseText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationPackageDetailsEula
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEula">DataOciMarketplacePublicationPackageDetailsEula</a>

---


### DataOciMarketplacePublicationPackageDetailsList <a name="DataOciMarketplacePublicationPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationPackageDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationPackageDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationPackageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationPackageDetailsOperatingSystemList <a name="DataOciMarketplacePublicationPackageDetailsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationPackageDetailsOperatingSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationPackageDetailsOperatingSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference <a name="DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystem">DataOciMarketplacePublicationPackageDetailsOperatingSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystem">DataOciMarketplacePublicationPackageDetailsOperatingSystem</a>

---


### DataOciMarketplacePublicationPackageDetailsOutputReference <a name="DataOciMarketplacePublicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationPackageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationPackageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.eula">Eula</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList">DataOciMarketplacePublicationPackageDetailsEulaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList">DataOciMarketplacePublicationPackageDetailsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetails">DataOciMarketplacePublicationPackageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Eula`<sup>Required</sup> <a name="Eula" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.eula"></a>

```go
func Eula() DataOciMarketplacePublicationPackageDetailsEulaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsEulaList">DataOciMarketplacePublicationPackageDetailsEulaList</a>

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() DataOciMarketplacePublicationPackageDetailsOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOperatingSystemList">DataOciMarketplacePublicationPackageDetailsOperatingSystemList</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationPackageDetails">DataOciMarketplacePublicationPackageDetails</a>

---


### DataOciMarketplacePublicationSupportContactsList <a name="DataOciMarketplacePublicationSupportContactsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationSupportContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationSupportContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationSupportContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationSupportContactsOutputReference <a name="DataOciMarketplacePublicationSupportContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationSupportContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationSupportContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContacts">DataOciMarketplacePublicationSupportContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationSupportContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportContacts">DataOciMarketplacePublicationSupportContacts</a>

---


### DataOciMarketplacePublicationSupportedOperatingSystemsList <a name="DataOciMarketplacePublicationSupportedOperatingSystemsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationSupportedOperatingSystemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationSupportedOperatingSystemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference <a name="DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublication"

dataocimarketplacepublication.NewDataOciMarketplacePublicationSupportedOperatingSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystems">DataOciMarketplacePublicationSupportedOperatingSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationSupportedOperatingSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublication.DataOciMarketplacePublicationSupportedOperatingSystems">DataOciMarketplacePublicationSupportedOperatingSystems</a>

---



