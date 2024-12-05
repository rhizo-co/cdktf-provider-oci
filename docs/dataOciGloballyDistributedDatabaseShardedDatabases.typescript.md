# `dataOciGloballyDistributedDatabaseShardedDatabases` Submodule <a name="`dataOciGloballyDistributedDatabaseShardedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabases <a name="DataOciGloballyDistributedDatabaseShardedDatabases" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases oci_globally_distributed_database_sharded_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases(scope: Construct, id: string, config: DataOciGloballyDistributedDatabaseShardedDatabasesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig">DataOciGloballyDistributedDatabaseShardedDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig">DataOciGloballyDistributedDatabaseShardedDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGloballyDistributedDatabaseShardedDatabasesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isConstruct"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformElement"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformDataSource"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.generateConfigForImport"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGloballyDistributedDatabaseShardedDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGloballyDistributedDatabaseShardedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGloballyDistributedDatabaseShardedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList">DataOciGloballyDistributedDatabaseShardedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.shardedDatabaseCollection">shardedDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.filter"></a>

```typescript
public readonly filter: DataOciGloballyDistributedDatabaseShardedDatabasesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList">DataOciGloballyDistributedDatabaseShardedDatabasesFilterList</a>

---

##### `shardedDatabaseCollection`<sup>Required</sup> <a name="shardedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.shardedDatabaseCollection"></a>

```typescript
public readonly shardedDatabaseCollection: DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGloballyDistributedDatabaseShardedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabases.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabasesConfig <a name="DataOciGloballyDistributedDatabaseShardedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabasesConfig: dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#compartment_id DataOciGloballyDistributedDatabaseShardedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#display_name DataOciGloballyDistributedDatabaseShardedDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#id DataOciGloballyDistributedDatabaseShardedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#state DataOciGloballyDistributedDatabaseShardedDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#compartment_id DataOciGloballyDistributedDatabaseShardedDatabases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#display_name DataOciGloballyDistributedDatabaseShardedDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGloballyDistributedDatabaseShardedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#filter DataOciGloballyDistributedDatabaseShardedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#id DataOciGloballyDistributedDatabaseShardedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#state DataOciGloballyDistributedDatabaseShardedDatabases#state}.

---

### DataOciGloballyDistributedDatabaseShardedDatabasesFilter <a name="DataOciGloballyDistributedDatabaseShardedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabasesFilter: dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#name DataOciGloballyDistributedDatabaseShardedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#values DataOciGloballyDistributedDatabaseShardedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#regex DataOciGloballyDistributedDatabaseShardedDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#name DataOciGloballyDistributedDatabaseShardedDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#values DataOciGloballyDistributedDatabaseShardedDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_databases#regex DataOciGloballyDistributedDatabaseShardedDatabases#regex}.

---

### DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection <a name="DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection: dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection = { ... }
```


### DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems <a name="DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems: dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGloballyDistributedDatabaseShardedDatabasesFilterList <a name="DataOciGloballyDistributedDatabaseShardedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGloballyDistributedDatabaseShardedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>[]

---


### DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGloballyDistributedDatabaseShardedDatabasesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesFilter">DataOciGloballyDistributedDatabaseShardedDatabasesFilter</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList <a name="DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.chunks">chunks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.clusterCertificateCommonName">clusterCertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.dbDeploymentType">dbDeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.listenerPortTls">listenerPortTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.onsPortLocal">onsPortLocal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.onsPortRemote">onsPortRemote</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.replicationMethod">replicationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.replicationUnit">replicationUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.shardingMethod">shardingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.totalCpuCount">totalCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.totalDataStorageSizeInGbs">totalDataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.chunks"></a>

```typescript
public readonly chunks: number;
```

- *Type:* number

---

##### `clusterCertificateCommonName`<sup>Required</sup> <a name="clusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.clusterCertificateCommonName"></a>

```typescript
public readonly clusterCertificateCommonName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbDeploymentType`<sup>Required</sup> <a name="dbDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.dbDeploymentType"></a>

```typescript
public readonly dbDeploymentType: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `listenerPortTls`<sup>Required</sup> <a name="listenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.listenerPortTls"></a>

```typescript
public readonly listenerPortTls: number;
```

- *Type:* number

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `onsPortLocal`<sup>Required</sup> <a name="onsPortLocal" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.onsPortLocal"></a>

```typescript
public readonly onsPortLocal: number;
```

- *Type:* number

---

##### `onsPortRemote`<sup>Required</sup> <a name="onsPortRemote" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.onsPortRemote"></a>

```typescript
public readonly onsPortRemote: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `replicationMethod`<sup>Required</sup> <a name="replicationMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.replicationMethod"></a>

```typescript
public readonly replicationMethod: string;
```

- *Type:* string

---

##### `replicationUnit`<sup>Required</sup> <a name="replicationUnit" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.replicationUnit"></a>

```typescript
public readonly replicationUnit: number;
```

- *Type:* number

---

##### `shardingMethod`<sup>Required</sup> <a name="shardingMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.shardingMethod"></a>

```typescript
public readonly shardingMethod: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalCpuCount`<sup>Required</sup> <a name="totalCpuCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.totalCpuCount"></a>

```typescript
public readonly totalCpuCount: number;
```

- *Type:* number

---

##### `totalDataStorageSizeInGbs`<sup>Required</sup> <a name="totalDataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.totalDataStorageSizeInGbs"></a>

```typescript
public readonly totalDataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItems</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList <a name="DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.get"></a>

```typescript
public get(index: number): DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGloballyDistributedDatabaseShardedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabases.DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection">DataOciGloballyDistributedDatabaseShardedDatabasesShardedDatabaseCollection</a>

---



