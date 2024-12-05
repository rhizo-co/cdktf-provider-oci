# `dataOciMysqlReplicas` Submodule <a name="`dataOciMysqlReplicas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlReplicas <a name="DataOciMysqlReplicas" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas oci_mysql_replicas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicas(scope: Construct, id: string, config: DataOciMysqlReplicasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig">DataOciMysqlReplicasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig">DataOciMysqlReplicasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetIsUpToDate">resetIsUpToDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetReplicaId">resetReplicaId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMysqlReplicasFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>[]

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsUpToDate` <a name="resetIsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetIsUpToDate"></a>

```typescript
public resetIsUpToDate(): void
```

##### `resetReplicaId` <a name="resetReplicaId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetReplicaId"></a>

```typescript
public resetReplicaId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlReplicas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isConstruct"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlReplicas.DataOciMysqlReplicas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformElement"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformDataSource"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.generateConfigForImport"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlReplicas.DataOciMysqlReplicas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMysqlReplicas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlReplicas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlReplicas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlReplicas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList">DataOciMysqlReplicasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList">DataOciMysqlReplicasReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.isUpToDateInput">isUpToDateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.replicaIdInput">replicaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.isUpToDate">isUpToDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.replicaId">replicaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.filter"></a>

```typescript
public readonly filter: DataOciMysqlReplicasFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList">DataOciMysqlReplicasFilterList</a>

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.replicas"></a>

```typescript
public readonly replicas: DataOciMysqlReplicasReplicasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList">DataOciMysqlReplicasReplicasList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMysqlReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isUpToDateInput`<sup>Optional</sup> <a name="isUpToDateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.isUpToDateInput"></a>

```typescript
public readonly isUpToDateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicaIdInput`<sup>Optional</sup> <a name="replicaIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.replicaIdInput"></a>

```typescript
public readonly replicaIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUpToDate`<sup>Required</sup> <a name="isUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.isUpToDate"></a>

```typescript
public readonly isUpToDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicaId`<sup>Required</sup> <a name="replicaId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.replicaId"></a>

```typescript
public readonly replicaId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlReplicasConfig <a name="DataOciMysqlReplicasConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlReplicasConfig: dataOciMysqlReplicas.DataOciMysqlReplicasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#compartment_id DataOciMysqlReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#configuration_id DataOciMysqlReplicas#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#db_system_id DataOciMysqlReplicas#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#display_name DataOciMysqlReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#id DataOciMysqlReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.isUpToDate">isUpToDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#is_up_to_date DataOciMysqlReplicas#is_up_to_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.replicaId">replicaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#replica_id DataOciMysqlReplicas#replica_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#state DataOciMysqlReplicas#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#compartment_id DataOciMysqlReplicas#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#configuration_id DataOciMysqlReplicas#configuration_id}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#db_system_id DataOciMysqlReplicas#db_system_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#display_name DataOciMysqlReplicas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMysqlReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#filter DataOciMysqlReplicas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#id DataOciMysqlReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUpToDate`<sup>Optional</sup> <a name="isUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.isUpToDate"></a>

```typescript
public readonly isUpToDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#is_up_to_date DataOciMysqlReplicas#is_up_to_date}.

---

##### `replicaId`<sup>Optional</sup> <a name="replicaId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.replicaId"></a>

```typescript
public readonly replicaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#replica_id DataOciMysqlReplicas#replica_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#state DataOciMysqlReplicas#state}.

---

### DataOciMysqlReplicasFilter <a name="DataOciMysqlReplicasFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlReplicasFilter: dataOciMysqlReplicas.DataOciMysqlReplicasFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#name DataOciMysqlReplicas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#values DataOciMysqlReplicas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#regex DataOciMysqlReplicas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#name DataOciMysqlReplicas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#values DataOciMysqlReplicas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_replicas#regex DataOciMysqlReplicas#regex}.

---

### DataOciMysqlReplicasReplicas <a name="DataOciMysqlReplicasReplicas" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicas.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlReplicasReplicas: dataOciMysqlReplicas.DataOciMysqlReplicasReplicas = { ... }
```


### DataOciMysqlReplicasReplicasReplicaOverrides <a name="DataOciMysqlReplicasReplicasReplicaOverrides" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverrides.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlReplicasReplicasReplicaOverrides: dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverrides = { ... }
```


### DataOciMysqlReplicasReplicasSecureConnections <a name="DataOciMysqlReplicasReplicasSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnections.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlReplicasReplicasSecureConnections: dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnections = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlReplicasFilterList <a name="DataOciMysqlReplicasFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.get"></a>

```typescript
public get(index: number): DataOciMysqlReplicasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlReplicasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>[]

---


### DataOciMysqlReplicasFilterOutputReference <a name="DataOciMysqlReplicasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlReplicasFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasFilter">DataOciMysqlReplicasFilter</a>

---


### DataOciMysqlReplicasReplicasList <a name="DataOciMysqlReplicasReplicasList" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.get"></a>

```typescript
public get(index: number): DataOciMysqlReplicasReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlReplicasReplicasOutputReference <a name="DataOciMysqlReplicasReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.replicaOverrides">replicaOverrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList">DataOciMysqlReplicasReplicasReplicaOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList">DataOciMysqlReplicasReplicasSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicas">DataOciMysqlReplicasReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.isDeleteProtected"></a>

```typescript
public readonly isDeleteProtected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `replicaOverrides`<sup>Required</sup> <a name="replicaOverrides" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.replicaOverrides"></a>

```typescript
public readonly replicaOverrides: DataOciMysqlReplicasReplicasReplicaOverridesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList">DataOciMysqlReplicasReplicasReplicaOverridesList</a>

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.secureConnections"></a>

```typescript
public readonly secureConnections: DataOciMysqlReplicasReplicasSecureConnectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList">DataOciMysqlReplicasReplicasSecureConnectionsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlReplicasReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicas">DataOciMysqlReplicasReplicas</a>

---


### DataOciMysqlReplicasReplicasReplicaOverridesList <a name="DataOciMysqlReplicasReplicasReplicaOverridesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.get"></a>

```typescript
public get(index: number): DataOciMysqlReplicasReplicasReplicaOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlReplicasReplicasReplicaOverridesOutputReference <a name="DataOciMysqlReplicasReplicasReplicaOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverrides">DataOciMysqlReplicasReplicasReplicaOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlReplicasReplicasReplicaOverrides;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasReplicaOverrides">DataOciMysqlReplicasReplicasReplicaOverrides</a>

---


### DataOciMysqlReplicasReplicasSecureConnectionsList <a name="DataOciMysqlReplicasReplicasSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.get"></a>

```typescript
public get(index: number): DataOciMysqlReplicasReplicasSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlReplicasReplicasSecureConnectionsOutputReference <a name="DataOciMysqlReplicasReplicasSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlReplicas } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnections">DataOciMysqlReplicasReplicasSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlReplicasReplicasSecureConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlReplicas.DataOciMysqlReplicasReplicasSecureConnections">DataOciMysqlReplicasReplicasSecureConnections</a>

---



