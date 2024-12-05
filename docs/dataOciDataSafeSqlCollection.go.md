# `dataOciDataSafeSqlCollection` Submodule <a name="`dataOciDataSafeSqlCollection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlCollection <a name="DataOciDataSafeSqlCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection oci_data_safe_sql_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollection"

dataocidatasafesqlcollection.NewDataOciDataSafeSqlCollection(scope Construct, id *string, config DataOciDataSafeSqlCollectionConfig) DataOciDataSafeSqlCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig">DataOciDataSafeSqlCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig">DataOciDataSafeSqlCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollection"

dataocidatasafesqlcollection.DataOciDataSafeSqlCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollection"

dataocidatasafesqlcollection.DataOciDataSafeSqlCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollection"

dataocidatasafesqlcollection.DataOciDataSafeSqlCollection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollection"

dataocidatasafesqlcollection.DataOciDataSafeSqlCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSqlCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSqlCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSqlCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.dbUserName">DbUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.generateSqlFirewallPolicyTrigger">GenerateSqlFirewallPolicyTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.purgeLogsTrigger">PurgeLogsTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.refreshLogInsightsTrigger">RefreshLogInsightsTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.sqlLevel">SqlLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.startTrigger">StartTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.stopTrigger">StopTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeLastStarted">TimeLastStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeLastStopped">TimeLastStopped</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.sqlCollectionIdInput">SqlCollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.sqlCollectionId">SqlCollectionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.dbUserName"></a>

```go
func DbUserName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GenerateSqlFirewallPolicyTrigger`<sup>Required</sup> <a name="GenerateSqlFirewallPolicyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.generateSqlFirewallPolicyTrigger"></a>

```go
func GenerateSqlFirewallPolicyTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PurgeLogsTrigger`<sup>Required</sup> <a name="PurgeLogsTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.purgeLogsTrigger"></a>

```go
func PurgeLogsTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RefreshLogInsightsTrigger`<sup>Required</sup> <a name="RefreshLogInsightsTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.refreshLogInsightsTrigger"></a>

```go
func RefreshLogInsightsTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.sqlLevel"></a>

```go
func SqlLevel() *string
```

- *Type:* *string

---

##### `StartTrigger`<sup>Required</sup> <a name="StartTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.startTrigger"></a>

```go
func StartTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StopTrigger`<sup>Required</sup> <a name="StopTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.stopTrigger"></a>

```go
func StopTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastStarted`<sup>Required</sup> <a name="TimeLastStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeLastStarted"></a>

```go
func TimeLastStarted() *string
```

- *Type:* *string

---

##### `TimeLastStopped`<sup>Required</sup> <a name="TimeLastStopped" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeLastStopped"></a>

```go
func TimeLastStopped() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `SqlCollectionIdInput`<sup>Optional</sup> <a name="SqlCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.sqlCollectionIdInput"></a>

```go
func SqlCollectionIdInput() *string
```

- *Type:* *string

---

##### `SqlCollectionId`<sup>Required</sup> <a name="SqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.sqlCollectionId"></a>

```go
func SqlCollectionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlCollectionConfig <a name="DataOciDataSafeSqlCollectionConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollection"

&dataocidatasafesqlcollection.DataOciDataSafeSqlCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SqlCollectionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.sqlCollectionId">SqlCollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection#sql_collection_id DataOciDataSafeSqlCollection#sql_collection_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SqlCollectionId`<sup>Required</sup> <a name="SqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollection.DataOciDataSafeSqlCollectionConfig.property.sqlCollectionId"></a>

```go
SqlCollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection#sql_collection_id DataOciDataSafeSqlCollection#sql_collection_id}.

---


