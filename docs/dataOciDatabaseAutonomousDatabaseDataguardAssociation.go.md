# `dataOciDatabaseAutonomousDatabaseDataguardAssociation` Submodule <a name="`dataOciDatabaseAutonomousDatabaseDataguardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociation <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association oci_database_autonomous_database_dataguard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasedataguardassociation"

dataocidatabaseautonomousdatabasedataguardassociation.NewDataOciDatabaseAutonomousDatabaseDataguardAssociation(scope Construct, id *string, config DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig) DataOciDatabaseAutonomousDatabaseDataguardAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig">DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig">DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasedataguardassociation"

dataocidatabaseautonomousdatabasedataguardassociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasedataguardassociation"

dataocidatabaseautonomousdatabasedataguardassociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasedataguardassociation"

dataocidatabaseautonomousdatabasedataguardassociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasedataguardassociation"

dataocidatabaseautonomousdatabasedataguardassociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseDataguardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousDatabaseDataguardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseDataguardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyLag">ApplyLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyRate">ApplyRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseId">PeerAutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseLifeCycleState">PeerAutonomousDatabaseLifeCycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerRole">PeerRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeLastRoleChanged">TimeLastRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationIdInput">AutonomousDatabaseDataguardAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationId">AutonomousDatabaseDataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyLag"></a>

```go
func ApplyLag() *string
```

- *Type:* *string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.applyRate"></a>

```go
func ApplyRate() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PeerAutonomousDatabaseId`<sup>Required</sup> <a name="PeerAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseId"></a>

```go
func PeerAutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `PeerAutonomousDatabaseLifeCycleState`<sup>Required</sup> <a name="PeerAutonomousDatabaseLifeCycleState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerAutonomousDatabaseLifeCycleState"></a>

```go
func PeerAutonomousDatabaseLifeCycleState() *string
```

- *Type:* *string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.peerRole"></a>

```go
func PeerRole() *string
```

- *Type:* *string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.protectionMode"></a>

```go
func ProtectionMode() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastRoleChanged`<sup>Required</sup> <a name="TimeLastRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.timeLastRoleChanged"></a>

```go
func TimeLastRoleChanged() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationIdInput"></a>

```go
func AutonomousDatabaseDataguardAssociationIdInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseDataguardAssociationId"></a>

```go
func AutonomousDatabaseDataguardAssociationId() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasedataguardassociation"

&dataocidatabaseautonomousdatabasedataguardassociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDatabaseDataguardAssociationId: *string,
	AutonomousDatabaseId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseDataguardAssociationId">AutonomousDatabaseDataguardAssociationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_dataguard_association_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#id DataOciDatabaseAutonomousDatabaseDataguardAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseDataguardAssociationId"></a>

```go
AutonomousDatabaseDataguardAssociationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_dataguard_association_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_dataguard_association_id}.

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociation#autonomous_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociation.DataOciDatabaseAutonomousDatabaseDataguardAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_association#id DataOciDatabaseAutonomousDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



