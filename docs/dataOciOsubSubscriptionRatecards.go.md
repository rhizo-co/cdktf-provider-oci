# `dataOciOsubSubscriptionRatecards` Submodule <a name="`dataOciOsubSubscriptionRatecards` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionRatecards <a name="DataOciOsubSubscriptionRatecards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards oci_osub_subscription_ratecards}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecards(scope Construct, id *string, config DataOciOsubSubscriptionRatecardsConfig) DataOciOsubSubscriptionRatecards
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig">DataOciOsubSubscriptionRatecardsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig">DataOciOsubSubscriptionRatecardsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetPartNumber">ResetPartNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeFrom">ResetTimeFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeTo">ResetTimeTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetId"></a>

```go
func ResetId()
```

##### `ResetPartNumber` <a name="ResetPartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetPartNumber"></a>

```go
func ResetPartNumber()
```

##### `ResetTimeFrom` <a name="ResetTimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeFrom"></a>

```go
func ResetTimeFrom()
```

##### `ResetTimeTo` <a name="ResetTimeTo" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetTimeTo"></a>

```go
func ResetTimeTo()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.resetXOneOriginRegion"></a>

```go
func ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionRatecards resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecards_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecards_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecards_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecards_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsubSubscriptionRatecards resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsubSubscriptionRatecards to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsubSubscriptionRatecards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionRatecards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList">DataOciOsubSubscriptionRatecardsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.rateCards">RateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList">DataOciOsubSubscriptionRatecardsRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumberInput">PartNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFromInput">TimeFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeToInput">TimeToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFrom">TimeFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeTo">TimeTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filter"></a>

```go
func Filter() DataOciOsubSubscriptionRatecardsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList">DataOciOsubSubscriptionRatecardsFilterList</a>

---

##### `RateCards`<sup>Required</sup> <a name="RateCards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.rateCards"></a>

```go
func RateCards() DataOciOsubSubscriptionRatecardsRateCardsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList">DataOciOsubSubscriptionRatecardsRateCardsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PartNumberInput`<sup>Optional</sup> <a name="PartNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumberInput"></a>

```go
func PartNumberInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeFromInput`<sup>Optional</sup> <a name="TimeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFromInput"></a>

```go
func TimeFromInput() *string
```

- *Type:* *string

---

##### `TimeToInput`<sup>Optional</sup> <a name="TimeToInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeToInput"></a>

```go
func TimeToInput() *string
```

- *Type:* *string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegionInput"></a>

```go
func XOneOriginRegionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TimeFrom`<sup>Required</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeFrom"></a>

```go
func TimeFrom() *string
```

- *Type:* *string

---

##### `TimeTo`<sup>Required</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.timeTo"></a>

```go
func TimeTo() *string
```

- *Type:* *string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.xOneOriginRegion"></a>

```go
func XOneOriginRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecards.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionRatecardsConfig <a name="DataOciOsubSubscriptionRatecardsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

&dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecardsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SubscriptionId: *string,
	Filter: interface{},
	Id: *string,
	PartNumber: *string,
	TimeFrom: *string,
	TimeTo: *string,
	XOneOriginRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.partNumber">PartNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeFrom">TimeFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeTo">TimeTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#compartment_id DataOciOsubSubscriptionRatecards#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#subscription_id DataOciOsubSubscriptionRatecards#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#filter DataOciOsubSubscriptionRatecards#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#id DataOciOsubSubscriptionRatecards#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartNumber`<sup>Optional</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.partNumber"></a>

```go
PartNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#part_number DataOciOsubSubscriptionRatecards#part_number}.

---

##### `TimeFrom`<sup>Optional</sup> <a name="TimeFrom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeFrom"></a>

```go
TimeFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_from DataOciOsubSubscriptionRatecards#time_from}.

---

##### `TimeTo`<sup>Optional</sup> <a name="TimeTo" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.timeTo"></a>

```go
TimeTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#time_to DataOciOsubSubscriptionRatecards#time_to}.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsConfig.property.xOneOriginRegion"></a>

```go
XOneOriginRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#x_one_origin_region DataOciOsubSubscriptionRatecards#x_one_origin_region}.

---

### DataOciOsubSubscriptionRatecardsFilter <a name="DataOciOsubSubscriptionRatecardsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

&dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecardsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#name DataOciOsubSubscriptionRatecards#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#values DataOciOsubSubscriptionRatecards#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#regex DataOciOsubSubscriptionRatecards#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#name DataOciOsubSubscriptionRatecards#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#values DataOciOsubSubscriptionRatecards#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_ratecards#regex DataOciOsubSubscriptionRatecards#regex}.

---

### DataOciOsubSubscriptionRatecardsRateCards <a name="DataOciOsubSubscriptionRatecardsRateCards" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

&dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecardsRateCards {

}
```


### DataOciOsubSubscriptionRatecardsRateCardsCurrency <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

&dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency {

}
```


### DataOciOsubSubscriptionRatecardsRateCardsProduct <a name="DataOciOsubSubscriptionRatecardsRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

&dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecardsRateCardsProduct {

}
```


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

&dataociosubsubscriptionratecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionRatecardsFilterList <a name="DataOciOsubSubscriptionRatecardsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionRatecardsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionRatecardsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsubSubscriptionRatecardsFilterOutputReference <a name="DataOciOsubSubscriptionRatecardsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionRatecardsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsubSubscriptionRatecardsRateCardsCurrencyList <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionRatecardsRateCardsCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency">DataOciOsubSubscriptionRatecardsRateCardsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.isoCode"></a>

```go
func IsoCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```go
func StdPrecision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionRatecardsRateCardsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrency">DataOciOsubSubscriptionRatecardsRateCardsCurrency</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsList <a name="DataOciOsubSubscriptionRatecardsRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionRatecardsRateCardsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionRatecardsRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionRatecardsRateCardsOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionRatecardsRateCardsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList">DataOciOsubSubscriptionRatecardsRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage">DiscretionaryDiscountPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.isTier">IsTier</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.overagePrice">OveragePrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList">DataOciOsubSubscriptionRatecardsRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers">RateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards">DataOciOsubSubscriptionRatecardsRateCards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.currency"></a>

```go
func Currency() DataOciOsubSubscriptionRatecardsRateCardsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsCurrencyList">DataOciOsubSubscriptionRatecardsRateCardsCurrencyList</a>

---

##### `DiscretionaryDiscountPercentage`<sup>Required</sup> <a name="DiscretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```go
func DiscretionaryDiscountPercentage() *string
```

- *Type:* *string

---

##### `IsTier`<sup>Required</sup> <a name="IsTier" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.isTier"></a>

```go
func IsTier() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.overagePrice"></a>

```go
func OveragePrice() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.product"></a>

```go
func Product() DataOciOsubSubscriptionRatecardsRateCardsProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList">DataOciOsubSubscriptionRatecardsRateCardsProductList</a>

---

##### `RateCardTiers`<sup>Required</sup> <a name="RateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.rateCardTiers"></a>

```go
func RateCardTiers() DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList</a>

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionRatecardsRateCards
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCards">DataOciOsubSubscriptionRatecardsRateCards</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsProductList <a name="DataOciOsubSubscriptionRatecardsRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionRatecardsRateCardsProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct">DataOciOsubSubscriptionRatecardsRateCardsProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.billingCategory"></a>

```go
func BillingCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.productCategory"></a>

```go
func ProductCategory() *string
```

- *Type:* *string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```go
func UcmRateCardPartType() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionRatecardsRateCardsProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsProduct">DataOciOsubSubscriptionRatecardsRateCardsProduct</a>

---


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference <a name="DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionratecards"

dataociosubsubscriptionratecards.NewDataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice">OveragePrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity">UpToQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```go
func OveragePrice() *string
```

- *Type:* *string

---

##### `UpToQuantity`<sup>Required</sup> <a name="UpToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```go
func UpToQuantity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionRatecards.DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers">DataOciOsubSubscriptionRatecardsRateCardsRateCardTiers</a>

---



