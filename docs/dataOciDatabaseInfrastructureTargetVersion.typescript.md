# `dataOciDatabaseInfrastructureTargetVersion` Submodule <a name="`dataOciDatabaseInfrastructureTargetVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseInfrastructureTargetVersion <a name="DataOciDatabaseInfrastructureTargetVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version oci_database_infrastructure_target_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer"></a>

```typescript
import { dataOciDatabaseInfrastructureTargetVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion(scope: Construct, id: string, config: DataOciDatabaseInfrastructureTargetVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig">DataOciDatabaseInfrastructureTargetVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig">DataOciDatabaseInfrastructureTargetVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceId">resetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTargetResourceId` <a name="resetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceId"></a>

```typescript
public resetTargetResourceId(): void
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceType"></a>

```typescript
public resetTargetResourceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseInfrastructureTargetVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct"></a>

```typescript
import { dataOciDatabaseInfrastructureTargetVersion } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement"></a>

```typescript
import { dataOciDatabaseInfrastructureTargetVersion } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseInfrastructureTargetVersion } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseInfrastructureTargetVersion } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseInfrastructureTargetVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseInfrastructureTargetVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseInfrastructureTargetVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseInfrastructureTargetVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetDbVersionHistoryEntry">targetDbVersionHistoryEntry</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetStorageVersionHistoryEntry">targetStorageVersionHistoryEntry</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `targetDbVersionHistoryEntry`<sup>Required</sup> <a name="targetDbVersionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetDbVersionHistoryEntry"></a>

```typescript
public readonly targetDbVersionHistoryEntry: string[];
```

- *Type:* string[]

---

##### `targetStorageVersionHistoryEntry`<sup>Required</sup> <a name="targetStorageVersionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetStorageVersionHistoryEntry"></a>

```typescript
public readonly targetStorageVersionHistoryEntry: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceTypeInput"></a>

```typescript
public readonly targetResourceTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseInfrastructureTargetVersionConfig <a name="DataOciDatabaseInfrastructureTargetVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.Initializer"></a>

```typescript
import { dataOciDatabaseInfrastructureTargetVersion } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseInfrastructureTargetVersionConfig: dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}.

---



