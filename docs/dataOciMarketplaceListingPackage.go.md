# `dataOciMarketplaceListingPackage` Submodule <a name="`dataOciMarketplaceListingPackage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceListingPackage <a name="DataOciMarketplaceListingPackage" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package oci_marketplace_listing_package}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackage(scope Construct, id *string, config DataOciMarketplaceListingPackageConfig) DataOciMarketplaceListingPackage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig">DataOciMarketplaceListingPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig">DataOciMarketplaceListingPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplaceListingPackage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.DataOciMarketplaceListingPackage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.DataOciMarketplaceListingPackage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.DataOciMarketplaceListingPackage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.DataOciMarketplaceListingPackage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMarketplaceListingPackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMarketplaceListingPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMarketplaceListingPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceListingPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.appCatalogListingId">AppCatalogListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.appCatalogListingResourceVersion">AppCatalogListingResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.operatingSystem">OperatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList">DataOciMarketplaceListingPackageOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.pricing">Pricing</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList">DataOciMarketplaceListingPackagePricingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.regions">Regions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList">DataOciMarketplaceListingPackageRegionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.resourceLink">ResourceLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList">DataOciMarketplaceListingPackageVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.packageVersionInput">PackageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppCatalogListingId`<sup>Required</sup> <a name="AppCatalogListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.appCatalogListingId"></a>

```go
func AppCatalogListingId() *string
```

- *Type:* *string

---

##### `AppCatalogListingResourceVersion`<sup>Required</sup> <a name="AppCatalogListingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.appCatalogListingResourceVersion"></a>

```go
func AppCatalogListingResourceVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.operatingSystem"></a>

```go
func OperatingSystem() DataOciMarketplaceListingPackageOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList">DataOciMarketplaceListingPackageOperatingSystemList</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `Pricing`<sup>Required</sup> <a name="Pricing" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.pricing"></a>

```go
func Pricing() DataOciMarketplaceListingPackagePricingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList">DataOciMarketplaceListingPackagePricingList</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.regions"></a>

```go
func Regions() DataOciMarketplaceListingPackageRegionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList">DataOciMarketplaceListingPackageRegionsList</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceLink`<sup>Required</sup> <a name="ResourceLink" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.resourceLink"></a>

```go
func ResourceLink() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.variables"></a>

```go
func Variables() DataOciMarketplaceListingPackageVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList">DataOciMarketplaceListingPackageVariablesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.packageVersionInput"></a>

```go
func PackageVersionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceListingPackageConfig <a name="DataOciMarketplaceListingPackageConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

&dataocimarketplacelistingpackage.DataOciMarketplaceListingPackageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ListingId: *string,
	PackageVersion: *string,
	CompartmentId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#listing_id DataOciMarketplaceListingPackage#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#package_version DataOciMarketplaceListingPackage#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#compartment_id DataOciMarketplaceListingPackage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#id DataOciMarketplaceListingPackage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#listing_id DataOciMarketplaceListingPackage#listing_id}.

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.packageVersion"></a>

```go
PackageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#package_version DataOciMarketplaceListingPackage#package_version}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#compartment_id DataOciMarketplaceListingPackage#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package#id DataOciMarketplaceListingPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMarketplaceListingPackageOperatingSystem <a name="DataOciMarketplaceListingPackageOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

&dataocimarketplacelistingpackage.DataOciMarketplaceListingPackageOperatingSystem {

}
```


### DataOciMarketplaceListingPackagePricing <a name="DataOciMarketplaceListingPackagePricing" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricing"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricing.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

&dataocimarketplacelistingpackage.DataOciMarketplaceListingPackagePricing {

}
```


### DataOciMarketplaceListingPackagePricingInternationalMarketPrice <a name="DataOciMarketplaceListingPackagePricingInternationalMarketPrice" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPrice"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPrice.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

&dataocimarketplacelistingpackage.DataOciMarketplaceListingPackagePricingInternationalMarketPrice {

}
```


### DataOciMarketplaceListingPackageRegions <a name="DataOciMarketplaceListingPackageRegions" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

&dataocimarketplacelistingpackage.DataOciMarketplaceListingPackageRegions {

}
```


### DataOciMarketplaceListingPackageRegionsCountries <a name="DataOciMarketplaceListingPackageRegionsCountries" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

&dataocimarketplacelistingpackage.DataOciMarketplaceListingPackageRegionsCountries {

}
```


### DataOciMarketplaceListingPackageVariables <a name="DataOciMarketplaceListingPackageVariables" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

&dataocimarketplacelistingpackage.DataOciMarketplaceListingPackageVariables {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceListingPackageOperatingSystemList <a name="DataOciMarketplaceListingPackageOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageOperatingSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceListingPackageOperatingSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceListingPackageOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplaceListingPackageOperatingSystemOutputReference <a name="DataOciMarketplaceListingPackageOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageOperatingSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceListingPackageOperatingSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystem">DataOciMarketplaceListingPackageOperatingSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplaceListingPackageOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageOperatingSystem">DataOciMarketplaceListingPackageOperatingSystem</a>

---


### DataOciMarketplaceListingPackagePricingInternationalMarketPriceList <a name="DataOciMarketplaceListingPackagePricingInternationalMarketPriceList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackagePricingInternationalMarketPriceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceListingPackagePricingInternationalMarketPriceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference <a name="DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.rate">Rate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPrice">DataOciMarketplaceListingPackagePricingInternationalMarketPrice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.currencySymbol"></a>

```go
func CurrencySymbol() *string
```

- *Type:* *string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.rate"></a>

```go
func Rate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplaceListingPackagePricingInternationalMarketPrice
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPrice">DataOciMarketplaceListingPackagePricingInternationalMarketPrice</a>

---


### DataOciMarketplaceListingPackagePricingList <a name="DataOciMarketplaceListingPackagePricingList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackagePricingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceListingPackagePricingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceListingPackagePricingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplaceListingPackagePricingOutputReference <a name="DataOciMarketplaceListingPackagePricingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackagePricingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceListingPackagePricingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.currency">Currency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.internationalMarketPrice">InternationalMarketPrice</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList">DataOciMarketplaceListingPackagePricingInternationalMarketPriceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.payGoStrategy">PayGoStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.rate">Rate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricing">DataOciMarketplaceListingPackagePricing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.currency"></a>

```go
func Currency() *string
```

- *Type:* *string

---

##### `InternationalMarketPrice`<sup>Required</sup> <a name="InternationalMarketPrice" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.internationalMarketPrice"></a>

```go
func InternationalMarketPrice() DataOciMarketplaceListingPackagePricingInternationalMarketPriceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingInternationalMarketPriceList">DataOciMarketplaceListingPackagePricingInternationalMarketPriceList</a>

---

##### `PayGoStrategy`<sup>Required</sup> <a name="PayGoStrategy" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.payGoStrategy"></a>

```go
func PayGoStrategy() *string
```

- *Type:* *string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.rate"></a>

```go
func Rate() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplaceListingPackagePricing
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackagePricing">DataOciMarketplaceListingPackagePricing</a>

---


### DataOciMarketplaceListingPackageRegionsCountriesList <a name="DataOciMarketplaceListingPackageRegionsCountriesList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageRegionsCountriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceListingPackageRegionsCountriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceListingPackageRegionsCountriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplaceListingPackageRegionsCountriesOutputReference <a name="DataOciMarketplaceListingPackageRegionsCountriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageRegionsCountriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceListingPackageRegionsCountriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountries">DataOciMarketplaceListingPackageRegionsCountries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplaceListingPackageRegionsCountries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountries">DataOciMarketplaceListingPackageRegionsCountries</a>

---


### DataOciMarketplaceListingPackageRegionsList <a name="DataOciMarketplaceListingPackageRegionsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceListingPackageRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceListingPackageRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplaceListingPackageRegionsOutputReference <a name="DataOciMarketplaceListingPackageRegionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceListingPackageRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.countries">Countries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList">DataOciMarketplaceListingPackageRegionsCountriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegions">DataOciMarketplaceListingPackageRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Countries`<sup>Required</sup> <a name="Countries" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.countries"></a>

```go
func Countries() DataOciMarketplaceListingPackageRegionsCountriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsCountriesList">DataOciMarketplaceListingPackageRegionsCountriesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplaceListingPackageRegions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageRegions">DataOciMarketplaceListingPackageRegions</a>

---


### DataOciMarketplaceListingPackageVariablesList <a name="DataOciMarketplaceListingPackageVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceListingPackageVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceListingPackageVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplaceListingPackageVariablesOutputReference <a name="DataOciMarketplaceListingPackageVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacelistingpackage"

dataocimarketplacelistingpackage.NewDataOciMarketplaceListingPackageVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceListingPackageVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.hintMessage">HintMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.isMandatory">IsMandatory</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariables">DataOciMarketplaceListingPackageVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HintMessage`<sup>Required</sup> <a name="HintMessage" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.hintMessage"></a>

```go
func HintMessage() *string
```

- *Type:* *string

---

##### `IsMandatory`<sup>Required</sup> <a name="IsMandatory" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.isMandatory"></a>

```go
func IsMandatory() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplaceListingPackageVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackage.DataOciMarketplaceListingPackageVariables">DataOciMarketplaceListingPackageVariables</a>

---



