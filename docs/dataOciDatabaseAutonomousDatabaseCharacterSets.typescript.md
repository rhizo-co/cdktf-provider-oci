# `dataOciDatabaseAutonomousDatabaseCharacterSets` Submodule <a name="`dataOciDatabaseAutonomousDatabaseCharacterSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSets <a name="DataOciDatabaseAutonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets oci_database_autonomous_database_character_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets(scope: Construct, id: string, config?: DataOciDatabaseAutonomousDatabaseCharacterSetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig">DataOciDatabaseAutonomousDatabaseCharacterSetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig">DataOciDatabaseAutonomousDatabaseCharacterSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetCharacterSetType">resetCharacterSetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsDedicated">resetIsDedicated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsShared">resetIsShared</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseAutonomousDatabaseCharacterSetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>[]

---

##### `resetCharacterSetType` <a name="resetCharacterSetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetCharacterSetType"></a>

```typescript
public resetCharacterSetType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDedicated` <a name="resetIsDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsDedicated"></a>

```typescript
public resetIsDedicated(): void
```

##### `resetIsShared` <a name="resetIsShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsShared"></a>

```typescript
public resetIsShared(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseCharacterSets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseCharacterSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseCharacterSets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseCharacterSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseCharacterSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.autonomousDatabaseCharacterSets">autonomousDatabaseCharacterSets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList">DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetTypeInput">characterSetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicatedInput">isDedicatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isSharedInput">isSharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetType">characterSetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicated">isDedicated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isShared">isShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousDatabaseCharacterSets`<sup>Required</sup> <a name="autonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.autonomousDatabaseCharacterSets"></a>

```typescript
public readonly autonomousDatabaseCharacterSets: DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList">DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList</a>

---

##### `characterSetTypeInput`<sup>Optional</sup> <a name="characterSetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetTypeInput"></a>

```typescript
public readonly characterSetTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseAutonomousDatabaseCharacterSetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDedicatedInput`<sup>Optional</sup> <a name="isDedicatedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicatedInput"></a>

```typescript
public readonly isDedicatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSharedInput`<sup>Optional</sup> <a name="isSharedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isSharedInput"></a>

```typescript
public readonly isSharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `characterSetType`<sup>Required</sup> <a name="characterSetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetType"></a>

```typescript
public readonly characterSetType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDedicated`<sup>Required</sup> <a name="isDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicated"></a>

```typescript
public readonly isDedicated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShared`<sup>Required</sup> <a name="isShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isShared"></a>

```typescript
public readonly isShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets: dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets = { ... }
```


### DataOciDatabaseAutonomousDatabaseCharacterSetsConfig <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseCharacterSetsConfig: dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.characterSetType">characterSetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isDedicated">isDedicated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isShared">isShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `characterSetType`<sup>Optional</sup> <a name="characterSetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.characterSetType"></a>

```typescript
public readonly characterSetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseAutonomousDatabaseCharacterSetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#filter DataOciDatabaseAutonomousDatabaseCharacterSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDedicated`<sup>Optional</sup> <a name="isDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isDedicated"></a>

```typescript
public readonly isDedicated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}.

---

##### `isShared`<sup>Optional</sup> <a name="isShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isShared"></a>

```typescript
public readonly isShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}.

---

### DataOciDatabaseAutonomousDatabaseCharacterSetsFilter <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseCharacterSetsFilter: dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#name DataOciDatabaseAutonomousDatabaseCharacterSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#values DataOciDatabaseAutonomousDatabaseCharacterSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#regex DataOciDatabaseAutonomousDatabaseCharacterSets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#name DataOciDatabaseAutonomousDatabaseCharacterSets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#values DataOciDatabaseAutonomousDatabaseCharacterSets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#regex DataOciDatabaseAutonomousDatabaseCharacterSets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets</a>

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDatabaseCharacterSetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>[]

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseCharacterSets } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDatabaseCharacterSetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter">DataOciDatabaseAutonomousDatabaseCharacterSetsFilter</a>

---



