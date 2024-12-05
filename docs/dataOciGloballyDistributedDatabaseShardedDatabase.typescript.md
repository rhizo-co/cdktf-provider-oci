# `dataOciGloballyDistributedDatabaseShardedDatabase` Submodule <a name="`dataOciGloballyDistributedDatabaseShardedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabase <a name="DataOciGloballyDistributedDatabaseShardedDatabase" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase(scope: Construct, id: string, config: DataOciGloballyDistributedDatabaseShardedDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig">DataOciGloballyDistributedDatabaseShardedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig">DataOciGloballyDistributedDatabaseShardedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGloballyDistributedDatabaseShardedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGloballyDistributedDatabaseShardedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGloballyDistributedDatabaseShardedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate">caSignedCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.catalogDetails">catalogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.chunks">chunks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName">clusterCertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger">configureGsmsTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage">configureGsmsTriggerIsLatestGsmImage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames">configureGsmsTriggerOldGsmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger">configureShardingTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType">dbDeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger">downloadGsmCertificateSigningRequestTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger">fetchConnectionStringTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger">generateGsmCertificateSigningRequestTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword">generateWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger">generateWalletTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.gsms">gsms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList">DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPortTls">listenerPortTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortLocal">onsPortLocal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortRemote">onsPortRemote</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.privateEndpoint">privateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationMethod">replicationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationUnit">replicationUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardDetails">shardDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardingMethod">shardingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger">startDatabaseTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger">stopDatabaseTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger">uploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger">validateNetworkTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseIdInput">shardedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId">shardedDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `caSignedCertificate`<sup>Required</sup> <a name="caSignedCertificate" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate"></a>

```typescript
public readonly caSignedCertificate: string;
```

- *Type:* string

---

##### `catalogDetails`<sup>Required</sup> <a name="catalogDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.catalogDetails"></a>

```typescript
public readonly catalogDetails: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a>

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.chunks"></a>

```typescript
public readonly chunks: number;
```

- *Type:* number

---

##### `clusterCertificateCommonName`<sup>Required</sup> <a name="clusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName"></a>

```typescript
public readonly clusterCertificateCommonName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configureGsmsTrigger`<sup>Required</sup> <a name="configureGsmsTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger"></a>

```typescript
public readonly configureGsmsTrigger: number;
```

- *Type:* number

---

##### `configureGsmsTriggerIsLatestGsmImage`<sup>Required</sup> <a name="configureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage"></a>

```typescript
public readonly configureGsmsTriggerIsLatestGsmImage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `configureGsmsTriggerOldGsmNames`<sup>Required</sup> <a name="configureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames"></a>

```typescript
public readonly configureGsmsTriggerOldGsmNames: string[];
```

- *Type:* string[]

---

##### `configureShardingTrigger`<sup>Required</sup> <a name="configureShardingTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger"></a>

```typescript
public readonly configureShardingTrigger: number;
```

- *Type:* number

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a>

---

##### `dbDeploymentType`<sup>Required</sup> <a name="dbDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType"></a>

```typescript
public readonly dbDeploymentType: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `downloadGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="downloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger"></a>

```typescript
public readonly downloadGsmCertificateSigningRequestTrigger: number;
```

- *Type:* number

---

##### `fetchConnectionStringTrigger`<sup>Required</sup> <a name="fetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger"></a>

```typescript
public readonly fetchConnectionStringTrigger: number;
```

- *Type:* number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `generateGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="generateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger"></a>

```typescript
public readonly generateGsmCertificateSigningRequestTrigger: number;
```

- *Type:* number

---

##### `generateWalletPassword`<sup>Required</sup> <a name="generateWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword"></a>

```typescript
public readonly generateWalletPassword: string;
```

- *Type:* string

---

##### `generateWalletTrigger`<sup>Required</sup> <a name="generateWalletTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger"></a>

```typescript
public readonly generateWalletTrigger: number;
```

- *Type:* number

---

##### `gsms`<sup>Required</sup> <a name="gsms" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.gsms"></a>

```typescript
public readonly gsms: DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList">DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `listenerPortTls`<sup>Required</sup> <a name="listenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPortTls"></a>

```typescript
public readonly listenerPortTls: number;
```

- *Type:* number

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `onsPortLocal`<sup>Required</sup> <a name="onsPortLocal" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortLocal"></a>

```typescript
public readonly onsPortLocal: number;
```

- *Type:* number

---

##### `onsPortRemote`<sup>Required</sup> <a name="onsPortRemote" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortRemote"></a>

```typescript
public readonly onsPortRemote: number;
```

- *Type:* number

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.patchOperations"></a>

```typescript
public readonly patchOperations: DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: string;
```

- *Type:* string

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `replicationMethod`<sup>Required</sup> <a name="replicationMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationMethod"></a>

```typescript
public readonly replicationMethod: string;
```

- *Type:* string

---

##### `replicationUnit`<sup>Required</sup> <a name="replicationUnit" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationUnit"></a>

```typescript
public readonly replicationUnit: number;
```

- *Type:* number

---

##### `shardDetails`<sup>Required</sup> <a name="shardDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardDetails"></a>

```typescript
public readonly shardDetails: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList</a>

---

##### `shardingMethod`<sup>Required</sup> <a name="shardingMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardingMethod"></a>

```typescript
public readonly shardingMethod: string;
```

- *Type:* string

---

##### `startDatabaseTrigger`<sup>Required</sup> <a name="startDatabaseTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger"></a>

```typescript
public readonly startDatabaseTrigger: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stopDatabaseTrigger`<sup>Required</sup> <a name="stopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger"></a>

```typescript
public readonly stopDatabaseTrigger: number;
```

- *Type:* number

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `uploadSignedCertificateAndGenerateWalletTrigger`<sup>Required</sup> <a name="uploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger"></a>

```typescript
public readonly uploadSignedCertificateAndGenerateWalletTrigger: number;
```

- *Type:* number

---

##### `validateNetworkTrigger`<sup>Required</sup> <a name="validateNetworkTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger"></a>

```typescript
public readonly validateNetworkTrigger: number;
```

- *Type:* number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `shardedDatabaseIdInput`<sup>Optional</sup> <a name="shardedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseIdInput"></a>

```typescript
public readonly shardedDatabaseIdInput: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `shardedDatabaseId`<sup>Required</sup> <a name="shardedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId"></a>

```typescript
public readonly shardedDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails = { ... }
```


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails = { ... }
```


### DataOciGloballyDistributedDatabaseShardedDatabaseConfig <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabaseConfig: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.shardedDatabaseId">shardedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#sharded_database_id DataOciGloballyDistributedDatabaseShardedDatabase#sharded_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#metadata DataOciGloballyDistributedDatabaseShardedDatabase#metadata}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `shardedDatabaseId`<sup>Required</sup> <a name="shardedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.shardedDatabaseId"></a>

```typescript
public readonly shardedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#sharded_database_id DataOciGloballyDistributedDatabaseShardedDatabase#sharded_database_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#metadata DataOciGloballyDistributedDatabaseShardedDatabase#metadata}.

---

### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings = { ... }
```


### DataOciGloballyDistributedDatabaseShardedDatabaseGsms <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsms" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabaseGsms: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms = { ... }
```


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabasePatchOperations: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations = { ... }
```


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabaseShardDetails: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails = { ... }
```


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails: dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId">containerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId">containerDatabaseParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails">encryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup">shardGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId">supportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires">timeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId"></a>

```typescript
public readonly containerDatabaseId: string;
```

- *Type:* string

---

##### `containerDatabaseParentId`<sup>Required</sup> <a name="containerDatabaseParentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId"></a>

```typescript
public readonly containerDatabaseParentId: string;
```

- *Type:* string

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```typescript
public readonly dataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `encryptionKeyDetails`<sup>Required</sup> <a name="encryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails"></a>

```typescript
public readonly encryptionKeyDetails: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList</a>

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```typescript
public readonly peerCloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `shardGroup`<sup>Required</sup> <a name="shardGroup" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup"></a>

```typescript
public readonly shardGroup: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportingResourceId`<sup>Required</sup> <a name="supportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId"></a>

```typescript
public readonly supportingResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeSslCertificateExpires`<sup>Required</sup> <a name="timeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires"></a>

```typescript
public readonly timeSslCertificateExpires: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId">supportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires">timeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms">DataOciGloballyDistributedDatabaseShardedDatabaseGsms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs"></a>

```typescript
public readonly dataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportingResourceId`<sup>Required</sup> <a name="supportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId"></a>

```typescript
public readonly supportingResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeSslCertificateExpires`<sup>Required</sup> <a name="timeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires"></a>

```typescript
public readonly timeSslCertificateExpires: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabaseGsms;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms">DataOciGloballyDistributedDatabaseShardedDatabaseGsms</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection">selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId">containerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId">containerDatabaseParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails">encryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup">shardGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace">shardSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId">supportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires">timeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId"></a>

```typescript
public readonly containerDatabaseId: string;
```

- *Type:* string

---

##### `containerDatabaseParentId`<sup>Required</sup> <a name="containerDatabaseParentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId"></a>

```typescript
public readonly containerDatabaseParentId: string;
```

- *Type:* string

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```typescript
public readonly dataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `encryptionKeyDetails`<sup>Required</sup> <a name="encryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails"></a>

```typescript
public readonly encryptionKeyDetails: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList</a>

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```typescript
public readonly peerCloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `shardGroup`<sup>Required</sup> <a name="shardGroup" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup"></a>

```typescript
public readonly shardGroup: string;
```

- *Type:* string

---

##### `shardSpace`<sup>Required</sup> <a name="shardSpace" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace"></a>

```typescript
public readonly shardSpace: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportingResourceId`<sup>Required</sup> <a name="supportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId"></a>

```typescript
public readonly supportingResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeSslCertificateExpires`<sup>Required</sup> <a name="timeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires"></a>

```typescript
public readonly timeSslCertificateExpires: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails</a>

---



