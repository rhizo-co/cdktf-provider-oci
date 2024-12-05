# `dataOciKmsVault` Submodule <a name="`dataOciKmsVault` Submodule" id="rhizo-co-terraform-provider-oci.dataOciKmsVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciKmsVault <a name="DataOciKmsVault" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_vault oci_kms_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVault(scope Construct, id *string, config DataOciKmsVaultConfig) DataOciKmsVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig">DataOciKmsVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig">DataOciKmsVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciKmsVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.DataOciKmsVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.DataOciKmsVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.DataOciKmsVault_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.DataOciKmsVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciKmsVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciKmsVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciKmsVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciKmsVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.cryptoEndpoint">CryptoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.externalKeyManagerMetadata">ExternalKeyManagerMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList">DataOciKmsVaultExternalKeyManagerMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.externalKeyManagerMetadataSummary">ExternalKeyManagerMetadataSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList">DataOciKmsVaultExternalKeyManagerMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.isPrimary">IsPrimary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.isVaultReplicable">IsVaultReplicable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.managementEndpoint">ManagementEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.replicaDetails">ReplicaDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList">DataOciKmsVaultReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoredFromVaultId">RestoredFromVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoreFromFile">RestoreFromFile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList">DataOciKmsVaultRestoreFromFileList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoreFromObjectStore">RestoreFromObjectStore</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList">DataOciKmsVaultRestoreFromObjectStoreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoreTrigger">RestoreTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.vaultType">VaultType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CryptoEndpoint`<sup>Required</sup> <a name="CryptoEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.cryptoEndpoint"></a>

```go
func CryptoEndpoint() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalKeyManagerMetadata`<sup>Required</sup> <a name="ExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.externalKeyManagerMetadata"></a>

```go
func ExternalKeyManagerMetadata() DataOciKmsVaultExternalKeyManagerMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList">DataOciKmsVaultExternalKeyManagerMetadataList</a>

---

##### `ExternalKeyManagerMetadataSummary`<sup>Required</sup> <a name="ExternalKeyManagerMetadataSummary" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.externalKeyManagerMetadataSummary"></a>

```go
func ExternalKeyManagerMetadataSummary() DataOciKmsVaultExternalKeyManagerMetadataSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList">DataOciKmsVaultExternalKeyManagerMetadataSummaryList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.isPrimary"></a>

```go
func IsPrimary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsVaultReplicable`<sup>Required</sup> <a name="IsVaultReplicable" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.isVaultReplicable"></a>

```go
func IsVaultReplicable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.managementEndpoint"></a>

```go
func ManagementEndpoint() *string
```

- *Type:* *string

---

##### `ReplicaDetails`<sup>Required</sup> <a name="ReplicaDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.replicaDetails"></a>

```go
func ReplicaDetails() DataOciKmsVaultReplicaDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList">DataOciKmsVaultReplicaDetailsList</a>

---

##### `RestoredFromVaultId`<sup>Required</sup> <a name="RestoredFromVaultId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoredFromVaultId"></a>

```go
func RestoredFromVaultId() *string
```

- *Type:* *string

---

##### `RestoreFromFile`<sup>Required</sup> <a name="RestoreFromFile" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoreFromFile"></a>

```go
func RestoreFromFile() DataOciKmsVaultRestoreFromFileList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList">DataOciKmsVaultRestoreFromFileList</a>

---

##### `RestoreFromObjectStore`<sup>Required</sup> <a name="RestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoreFromObjectStore"></a>

```go
func RestoreFromObjectStore() DataOciKmsVaultRestoreFromObjectStoreList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList">DataOciKmsVaultRestoreFromObjectStoreList</a>

---

##### `RestoreTrigger`<sup>Required</sup> <a name="RestoreTrigger" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.restoreTrigger"></a>

```go
func RestoreTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `VaultType`<sup>Required</sup> <a name="VaultType" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.vaultType"></a>

```go
func VaultType() *string
```

- *Type:* *string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciKmsVaultConfig <a name="DataOciKmsVaultConfig" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_vault#vault_id DataOciKmsVault#vault_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_vault#vault_id DataOciKmsVault#vault_id}.

---

### DataOciKmsVaultExternalKeyManagerMetadata <a name="DataOciKmsVaultExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultExternalKeyManagerMetadata {

}
```


### DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata <a name="DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata {

}
```


### DataOciKmsVaultExternalKeyManagerMetadataSummary <a name="DataOciKmsVaultExternalKeyManagerMetadataSummary" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultExternalKeyManagerMetadataSummary {

}
```


### DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary <a name="DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary {

}
```


### DataOciKmsVaultReplicaDetails <a name="DataOciKmsVaultReplicaDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultReplicaDetails {

}
```


### DataOciKmsVaultRestoreFromFile <a name="DataOciKmsVaultRestoreFromFile" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultRestoreFromFile {

}
```


### DataOciKmsVaultRestoreFromObjectStore <a name="DataOciKmsVaultRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStore"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStore.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

&dataocikmsvault.DataOciKmsVaultRestoreFromObjectStore {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciKmsVaultExternalKeyManagerMetadataList <a name="DataOciKmsVaultExternalKeyManagerMetadataList" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsVaultExternalKeyManagerMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.get"></a>

```go
func Get(index *f64) DataOciKmsVaultExternalKeyManagerMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList <a name="DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.get"></a>

```go
func Get(index *f64) DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference <a name="DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId">ClientAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret">ClientAppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl">IdcsAccountNameUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata">DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAppId`<sup>Required</sup> <a name="ClientAppId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId"></a>

```go
func ClientAppId() *string
```

- *Type:* *string

---

##### `ClientAppSecret`<sup>Required</sup> <a name="ClientAppSecret" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret"></a>

```go
func ClientAppSecret() *string
```

- *Type:* *string

---

##### `IdcsAccountNameUrl`<sup>Required</sup> <a name="IdcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl"></a>

```go
func IdcsAccountNameUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata">DataOciKmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---


### DataOciKmsVaultExternalKeyManagerMetadataOutputReference <a name="DataOciKmsVaultExternalKeyManagerMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsVaultExternalKeyManagerMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl">ExternalVaultEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata">OauthMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList">DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadata">DataOciKmsVaultExternalKeyManagerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalVaultEndpointUrl`<sup>Required</sup> <a name="ExternalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl"></a>

```go
func ExternalVaultEndpointUrl() *string
```

- *Type:* *string

---

##### `OauthMetadata`<sup>Required</sup> <a name="OauthMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata"></a>

```go
func OauthMetadata() DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList">DataOciKmsVaultExternalKeyManagerMetadataOauthMetadataList</a>

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsVaultExternalKeyManagerMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadata">DataOciKmsVaultExternalKeyManagerMetadata</a>

---


### DataOciKmsVaultExternalKeyManagerMetadataSummaryList <a name="DataOciKmsVaultExternalKeyManagerMetadataSummaryList" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsVaultExternalKeyManagerMetadataSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.get"></a>

```go
func Get(index *f64) DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList <a name="DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get"></a>

```go
func Get(index *f64) DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference <a name="DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId">ClientAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl">IdcsAccountNameUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAppId`<sup>Required</sup> <a name="ClientAppId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId"></a>

```go
func ClientAppId() *string
```

- *Type:* *string

---

##### `IdcsAccountNameUrl`<sup>Required</sup> <a name="IdcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl"></a>

```go
func IdcsAccountNameUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a>

---


### DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference <a name="DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl">ExternalVaultEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary">OauthMetadataSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummary">DataOciKmsVaultExternalKeyManagerMetadataSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalVaultEndpointUrl`<sup>Required</sup> <a name="ExternalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl"></a>

```go
func ExternalVaultEndpointUrl() *string
```

- *Type:* *string

---

##### `OauthMetadataSummary`<sup>Required</sup> <a name="OauthMetadataSummary" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary"></a>

```go
func OauthMetadataSummary() DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">DataOciKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a>

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsVaultExternalKeyManagerMetadataSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultExternalKeyManagerMetadataSummary">DataOciKmsVaultExternalKeyManagerMetadataSummary</a>

---


### DataOciKmsVaultReplicaDetailsList <a name="DataOciKmsVaultReplicaDetailsList" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultReplicaDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsVaultReplicaDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.get"></a>

```go
func Get(index *f64) DataOciKmsVaultReplicaDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsVaultReplicaDetailsOutputReference <a name="DataOciKmsVaultReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultReplicaDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsVaultReplicaDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.replicationId">ReplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetails">DataOciKmsVaultReplicaDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationId`<sup>Required</sup> <a name="ReplicationId" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.replicationId"></a>

```go
func ReplicationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsVaultReplicaDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultReplicaDetails">DataOciKmsVaultReplicaDetails</a>

---


### DataOciKmsVaultRestoreFromFileList <a name="DataOciKmsVaultRestoreFromFileList" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultRestoreFromFileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsVaultRestoreFromFileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.get"></a>

```go
func Get(index *f64) DataOciKmsVaultRestoreFromFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsVaultRestoreFromFileOutputReference <a name="DataOciKmsVaultRestoreFromFileOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultRestoreFromFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsVaultRestoreFromFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.contentLength">ContentLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails">RestoreVaultFromFileDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFile">DataOciKmsVaultRestoreFromFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.contentLength"></a>

```go
func ContentLength() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `RestoreVaultFromFileDetails`<sup>Required</sup> <a name="RestoreVaultFromFileDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails"></a>

```go
func RestoreVaultFromFileDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsVaultRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromFile">DataOciKmsVaultRestoreFromFile</a>

---


### DataOciKmsVaultRestoreFromObjectStoreList <a name="DataOciKmsVaultRestoreFromObjectStoreList" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultRestoreFromObjectStoreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciKmsVaultRestoreFromObjectStoreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.get"></a>

```go
func Get(index *f64) DataOciKmsVaultRestoreFromObjectStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciKmsVaultRestoreFromObjectStoreOutputReference <a name="DataOciKmsVaultRestoreFromObjectStoreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsvault"

dataocikmsvault.NewDataOciKmsVaultRestoreFromObjectStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciKmsVaultRestoreFromObjectStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStore">DataOciKmsVaultRestoreFromObjectStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciKmsVaultRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsVault.DataOciKmsVaultRestoreFromObjectStore">DataOciKmsVaultRestoreFromObjectStore</a>

---



