# `dataOciMarketplaceAcceptedAgreements` Submodule <a name="`dataOciMarketplaceAcceptedAgreements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceAcceptedAgreements <a name="DataOciMarketplaceAcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements oci_marketplace_accepted_agreements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.NewDataOciMarketplaceAcceptedAgreements(scope Construct, id *string, config DataOciMarketplaceAcceptedAgreementsConfig) DataOciMarketplaceAcceptedAgreements
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig">DataOciMarketplaceAcceptedAgreementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig">DataOciMarketplaceAcceptedAgreementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetAcceptedAgreementId">ResetAcceptedAgreementId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetListingId">ResetListingId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetPackageVersion">ResetPackageVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcceptedAgreementId` <a name="ResetAcceptedAgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetAcceptedAgreementId"></a>

```go
func ResetAcceptedAgreementId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetId"></a>

```go
func ResetId()
```

##### `ResetListingId` <a name="ResetListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetListingId"></a>

```go
func ResetListingId()
```

##### `ResetPackageVersion` <a name="ResetPackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.resetPackageVersion"></a>

```go
func ResetPackageVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplaceAcceptedAgreements resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.DataOciMarketplaceAcceptedAgreements_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.DataOciMarketplaceAcceptedAgreements_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.DataOciMarketplaceAcceptedAgreements_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.DataOciMarketplaceAcceptedAgreements_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMarketplaceAcceptedAgreements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMarketplaceAcceptedAgreements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMarketplaceAcceptedAgreements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceAcceptedAgreements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreements">AcceptedAgreements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList">DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList">DataOciMarketplaceAcceptedAgreementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementIdInput">AcceptedAgreementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersionInput">PackageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementId">AcceptedAgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AcceptedAgreements`<sup>Required</sup> <a name="AcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreements"></a>

```go
func AcceptedAgreements() DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList">DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filter"></a>

```go
func Filter() DataOciMarketplaceAcceptedAgreementsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList">DataOciMarketplaceAcceptedAgreementsFilterList</a>

---

##### `AcceptedAgreementIdInput`<sup>Optional</sup> <a name="AcceptedAgreementIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementIdInput"></a>

```go
func AcceptedAgreementIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersionInput"></a>

```go
func PackageVersionInput() *string
```

- *Type:* *string

---

##### `AcceptedAgreementId`<sup>Required</sup> <a name="AcceptedAgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.acceptedAgreementId"></a>

```go
func AcceptedAgreementId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreements.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceAcceptedAgreementsAcceptedAgreements <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

&dataocimarketplaceacceptedagreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements {

}
```


### DataOciMarketplaceAcceptedAgreementsConfig <a name="DataOciMarketplaceAcceptedAgreementsConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

&dataocimarketplaceacceptedagreements.DataOciMarketplaceAcceptedAgreementsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AcceptedAgreementId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ListingId: *string,
	PackageVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.acceptedAgreementId">AcceptedAgreementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#compartment_id DataOciMarketplaceAcceptedAgreements#compartment_id}.

---

##### `AcceptedAgreementId`<sup>Optional</sup> <a name="AcceptedAgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.acceptedAgreementId"></a>

```go
AcceptedAgreementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#accepted_agreement_id DataOciMarketplaceAcceptedAgreements#accepted_agreement_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#display_name DataOciMarketplaceAcceptedAgreements#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#filter DataOciMarketplaceAcceptedAgreements#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#id DataOciMarketplaceAcceptedAgreements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListingId`<sup>Optional</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#listing_id DataOciMarketplaceAcceptedAgreements#listing_id}.

---

##### `PackageVersion`<sup>Optional</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsConfig.property.packageVersion"></a>

```go
PackageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#package_version DataOciMarketplaceAcceptedAgreements#package_version}.

---

### DataOciMarketplaceAcceptedAgreementsFilter <a name="DataOciMarketplaceAcceptedAgreementsFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

&dataocimarketplaceacceptedagreements.DataOciMarketplaceAcceptedAgreementsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#name DataOciMarketplaceAcceptedAgreements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#values DataOciMarketplaceAcceptedAgreements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#regex DataOciMarketplaceAcceptedAgreements#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#name DataOciMarketplaceAcceptedAgreements#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#values DataOciMarketplaceAcceptedAgreements#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_accepted_agreements#regex DataOciMarketplaceAcceptedAgreements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.NewDataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference <a name="DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.NewDataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.agreementId">AgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements">DataOciMarketplaceAcceptedAgreementsAcceptedAgreements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.agreementId"></a>

```go
func AgreementId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMarketplaceAcceptedAgreementsAcceptedAgreements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsAcceptedAgreements">DataOciMarketplaceAcceptedAgreementsAcceptedAgreements</a>

---


### DataOciMarketplaceAcceptedAgreementsFilterList <a name="DataOciMarketplaceAcceptedAgreementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.NewDataOciMarketplaceAcceptedAgreementsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMarketplaceAcceptedAgreementsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get"></a>

```go
func Get(index *f64) DataOciMarketplaceAcceptedAgreementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMarketplaceAcceptedAgreementsFilterOutputReference <a name="DataOciMarketplaceAcceptedAgreementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimarketplaceacceptedagreements"

dataocimarketplaceacceptedagreements.NewDataOciMarketplaceAcceptedAgreementsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMarketplaceAcceptedAgreementsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceAcceptedAgreements.DataOciMarketplaceAcceptedAgreementsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



