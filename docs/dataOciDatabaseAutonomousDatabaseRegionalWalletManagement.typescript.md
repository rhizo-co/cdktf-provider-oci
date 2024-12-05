# `dataOciDatabaseAutonomousDatabaseRegionalWalletManagement` Submodule <a name="`dataOciDatabaseAutonomousDatabaseRegionalWalletManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseRegionalWalletManagement <a name="DataOciDatabaseAutonomousDatabaseRegionalWalletManagement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_regional_wallet_management oci_database_autonomous_database_regional_wallet_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRegionalWalletManagement } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement(scope: Construct, id: string, config?: DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig">DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig">DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRegionalWalletManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRegionalWalletManagement } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRegionalWalletManagement } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRegionalWalletManagement } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRegionalWalletManagement } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRegionalWalletManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseRegionalWalletManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseRegionalWalletManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_regional_wallet_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseRegionalWalletManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.shouldRotate">shouldRotate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.timeRotated">timeRotated</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `shouldRotate`<sup>Required</sup> <a name="shouldRotate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.shouldRotate"></a>

```typescript
public readonly shouldRotate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeRotated`<sup>Required</sup> <a name="timeRotated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.timeRotated"></a>

```typescript
public readonly timeRotated: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig <a name="DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRegionalWalletManagement } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig: dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRegionalWalletManagement.DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



