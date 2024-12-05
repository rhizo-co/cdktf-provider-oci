# `dataOciRecoveryProtectedDatabases` Submodule <a name="`dataOciRecoveryProtectedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabases <a name="DataOciRecoveryProtectedDatabases" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases oci_recovery_protected_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabases(scope Construct, id *string, config DataOciRecoveryProtectedDatabasesConfig) DataOciRecoveryProtectedDatabases
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig">DataOciRecoveryProtectedDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig">DataOciRecoveryProtectedDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId">ResetProtectionPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId">ResetRecoveryServiceSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId"></a>

```go
func ResetId()
```

##### `ResetProtectionPolicyId` <a name="ResetProtectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId"></a>

```go
func ResetProtectionPolicyId()
```

##### `ResetRecoveryServiceSubnetId` <a name="ResetRecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId"></a>

```go
func ResetRecoveryServiceSubnetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabases_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabases_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabases_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabases_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciRecoveryProtectedDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciRecoveryProtectedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection">ProtectedDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput">ProtectionPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput">RecoveryServiceSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId">ProtectionPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId">RecoveryServiceSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter"></a>

```go
func Filter() DataOciRecoveryProtectedDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a>

---

##### `ProtectedDatabaseCollection`<sup>Required</sup> <a name="ProtectedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection"></a>

```go
func ProtectedDatabaseCollection() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProtectionPolicyIdInput`<sup>Optional</sup> <a name="ProtectionPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput"></a>

```go
func ProtectionPolicyIdInput() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnetIdInput`<sup>Optional</sup> <a name="RecoveryServiceSubnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput"></a>

```go
func RecoveryServiceSubnetIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProtectionPolicyId`<sup>Required</sup> <a name="ProtectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId"></a>

```go
func ProtectionPolicyId() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnetId`<sup>Required</sup> <a name="RecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId"></a>

```go
func RecoveryServiceSubnetId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabasesConfig <a name="DataOciRecoveryProtectedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

&dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabasesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ProtectionPolicyId: *string,
	RecoveryServiceSubnetId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId">ProtectionPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId">RecoveryServiceSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#filter DataOciRecoveryProtectedDatabases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtectionPolicyId`<sup>Optional</sup> <a name="ProtectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId"></a>

```go
ProtectionPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}.

---

##### `RecoveryServiceSubnetId`<sup>Optional</sup> <a name="RecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId"></a>

```go
RecoveryServiceSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}.

---

### DataOciRecoveryProtectedDatabasesFilter <a name="DataOciRecoveryProtectedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

&dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabasesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}.

---

### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

&dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection {

}
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

&dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems {

}
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

&dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics {

}
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

&dataocirecoveryprotecteddatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryProtectedDatabasesFilterList <a name="DataOciRecoveryProtectedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryProtectedDatabasesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get"></a>

```go
func Get(index *f64) DataOciRecoveryProtectedDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciRecoveryProtectedDatabasesFilterOutputReference <a name="DataOciRecoveryProtectedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryProtectedDatabasesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get"></a>

```go
func Get(index *f64) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs">BackupSpaceEstimateInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs">BackupSpaceUsedInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds">CurrentRetentionPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs">DbSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled">IsRedoLogsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays">MinimumRecoveryNeededInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds">UnprotectedWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupSpaceEstimateInGbs`<sup>Required</sup> <a name="BackupSpaceEstimateInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```go
func BackupSpaceEstimateInGbs() *f64
```

- *Type:* *f64

---

##### `BackupSpaceUsedInGbs`<sup>Required</sup> <a name="BackupSpaceUsedInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```go
func BackupSpaceUsedInGbs() *f64
```

- *Type:* *f64

---

##### `CurrentRetentionPeriodInSeconds`<sup>Required</sup> <a name="CurrentRetentionPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```go
func CurrentRetentionPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `DbSizeInGbs`<sup>Required</sup> <a name="DbSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs"></a>

```go
func DbSizeInGbs() *f64
```

- *Type:* *f64

---

##### `IsRedoLogsEnabled`<sup>Required</sup> <a name="IsRedoLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled"></a>

```go
func IsRedoLogsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MinimumRecoveryNeededInDays`<sup>Required</sup> <a name="MinimumRecoveryNeededInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```go
func MinimumRecoveryNeededInDays() *f64
```

- *Type:* *f64

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `UnprotectedWindowInSeconds`<sup>Required</sup> <a name="UnprotectedWindowInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```go
func UnprotectedWindowInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize">DatabaseSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule">DeletionSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails">HealthDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource">IsReadOnlyResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped">IsRedoLogsShipped</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime">PolicyLockedDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId">ProtectionPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets">RecoveryServiceSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName">VpcUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseSize`<sup>Required</sup> <a name="DatabaseSize" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize"></a>

```go
func DatabaseSize() *string
```

- *Type:* *string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName"></a>

```go
func DbUniqueName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeletionSchedule`<sup>Required</sup> <a name="DeletionSchedule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule"></a>

```go
func DeletionSchedule() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Health`<sup>Required</sup> <a name="Health" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `HealthDetails`<sup>Required</sup> <a name="HealthDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails"></a>

```go
func HealthDetails() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsReadOnlyResource`<sup>Required</sup> <a name="IsReadOnlyResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource"></a>

```go
func IsReadOnlyResource() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRedoLogsShipped`<sup>Required</sup> <a name="IsRedoLogsShipped" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped"></a>

```go
func IsRedoLogsShipped() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics"></a>

```go
func Metrics() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PolicyLockedDateTime`<sup>Required</sup> <a name="PolicyLockedDateTime" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime"></a>

```go
func PolicyLockedDateTime() *string
```

- *Type:* *string

---

##### `ProtectionPolicyId`<sup>Required</sup> <a name="ProtectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId"></a>

```go
func ProtectionPolicyId() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnets`<sup>Required</sup> <a name="RecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets"></a>

```go
func RecoveryServiceSubnets() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VpcUserName`<sup>Required</sup> <a name="VpcUserName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName"></a>

```go
func VpcUserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get"></a>

```go
func Get(index *f64) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">RecoveryServiceSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnetId`<sup>Required</sup> <a name="RecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```go
func RecoveryServiceSubnetId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get"></a>

```go
func Get(index *f64) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabases"

dataocirecoveryprotecteddatabases.NewDataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items"></a>

```go
func Items() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a>

---



