# `dataOciMarketplacePublicationPackage` Submodule <a name="`dataOciMarketplacePublicationPackage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplacePublicationPackage <a name="DataOciMarketplacePublicationPackage" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package oci_marketplace_publication_package}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.NewDataOciMarketplacePublicationPackage(scope Construct, id *string, config DataOciMarketplacePublicationPackageConfig) DataOciMarketplacePublicationPackage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig">DataOciMarketplacePublicationPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig">DataOciMarketplacePublicationPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplacePublicationPackage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.DataOciMarketplacePublicationPackage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.DataOciMarketplacePublicationPackage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.DataOciMarketplacePublicationPackage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.DataOciMarketplacePublicationPackage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMarketplacePublicationPackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMarketplacePublicationPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMarketplacePublicationPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplacePublicationPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.appCatalogListingId">AppCatalogListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.appCatalogListingResourceVersion">AppCatalogListingResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.operatingSystem">OperatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList">DataOciMarketplacePublicationPackageOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.resourceLink">ResourceLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList">DataOciMarketplacePublicationPackageVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.packageVersionInput">PackageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.publicationIdInput">PublicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.publicationId">PublicationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppCatalogListingId`<sup>Required</sup> <a name="AppCatalogListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.appCatalogListingId"></a>

```go
func AppCatalogListingId() *string
```

- *Type:* *string

---

##### `AppCatalogListingResourceVersion`<sup>Required</sup> <a name="AppCatalogListingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.appCatalogListingResourceVersion"></a>

```go
func AppCatalogListingResourceVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.operatingSystem"></a>

```go
func OperatingSystem() DataOciMarketplacePublicationPackageOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList">DataOciMarketplacePublicationPackageOperatingSystemList</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceLink`<sup>Required</sup> <a name="ResourceLink" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.resourceLink"></a>

```go
func ResourceLink() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.variables"></a>

```go
func Variables() DataOciMarketplacePublicationPackageVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList">DataOciMarketplacePublicationPackageVariablesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.packageVersionInput"></a>

```go
func PackageVersionInput() *string
```

- *Type:* *string

---

##### `PublicationIdInput`<sup>Optional</sup> <a name="PublicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.publicationIdInput"></a>

```go
func PublicationIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

##### `PublicationId`<sup>Required</sup> <a name="PublicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.publicationId"></a>

```go
func PublicationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplacePublicationPackageConfig <a name="DataOciMarketplacePublicationPackageConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

&dataocimarketplacepublicationpackage.DataOciMarketplacePublicationPackageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PackageVersion: *string,
	PublicationId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package#package_version DataOciMarketplacePublicationPackage#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.publicationId">PublicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package#publication_id DataOciMarketplacePublicationPackage#publication_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package#id DataOciMarketplacePublicationPackage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.packageVersion"></a>

```go
PackageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package#package_version DataOciMarketplacePublicationPackage#package_version}.

---

##### `PublicationId`<sup>Required</sup> <a name="PublicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.publicationId"></a>

```go
PublicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package#publication_id DataOciMarketplacePublicationPackage#publication_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publication_package#id DataOciMarketplacePublicationPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMarketplacePublicationPackageOperatingSystem <a name="DataOciMarketplacePublicationPackageOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

&dataocimarketplacepublicationpackage.DataOciMarketplacePublicationPackageOperatingSystem {

}
```


### DataOciMarketplacePublicationPackageVariables <a name="DataOciMarketplacePublicationPackageVariables" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

&dataocimarketplacepublicationpackage.DataOciMarketplacePublicationPackageVariables {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplacePublicationPackageOperatingSystemList <a name="DataOciMarketplacePublicationPackageOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.NewDataOciMarketplacePublicationPackageOperatingSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationPackageOperatingSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationPackageOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationPackageOperatingSystemOutputReference <a name="DataOciMarketplacePublicationPackageOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.NewDataOciMarketplacePublicationPackageOperatingSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationPackageOperatingSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystem">DataOciMarketplacePublicationPackageOperatingSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationPackageOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageOperatingSystem">DataOciMarketplacePublicationPackageOperatingSystem</a>

---


### DataOciMarketplacePublicationPackageVariablesList <a name="DataOciMarketplacePublicationPackageVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.NewDataOciMarketplacePublicationPackageVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplacePublicationPackageVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.get"></a>

```go
func Get(index *f64) DataOciMarketplacePublicationPackageVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplacePublicationPackageVariablesOutputReference <a name="DataOciMarketplacePublicationPackageVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplacepublicationpackage"

dataocimarketplacepublicationpackage.NewDataOciMarketplacePublicationPackageVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplacePublicationPackageVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.hintMessage">HintMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.isMandatory">IsMandatory</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariables">DataOciMarketplacePublicationPackageVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HintMessage`<sup>Required</sup> <a name="HintMessage" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.hintMessage"></a>

```go
func HintMessage() *string
```

- *Type:* *string

---

##### `IsMandatory`<sup>Required</sup> <a name="IsMandatory" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.isMandatory"></a>

```go
func IsMandatory() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplacePublicationPackageVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublicationPackage.DataOciMarketplacePublicationPackageVariables">DataOciMarketplacePublicationPackageVariables</a>

---



