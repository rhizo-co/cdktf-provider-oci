# `dataOciRecoveryProtectedDatabases` Submodule <a name="`dataOciRecoveryProtectedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabases <a name="DataOciRecoveryProtectedDatabases" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases oci_recovery_protected_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases(scope: Construct, id: string, config: DataOciRecoveryProtectedDatabasesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig">DataOciRecoveryProtectedDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig">DataOciRecoveryProtectedDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId">resetProtectionPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId">resetRecoveryServiceSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciRecoveryProtectedDatabasesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProtectionPolicyId` <a name="resetProtectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetProtectionPolicyId"></a>

```typescript
public resetProtectionPolicyId(): void
```

##### `resetRecoveryServiceSubnetId` <a name="resetRecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetRecoveryServiceSubnetId"></a>

```typescript
public resetRecoveryServiceSubnetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciRecoveryProtectedDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciRecoveryProtectedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection">protectedDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput">protectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput">recoveryServiceSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId">protectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filter"></a>

```typescript
public readonly filter: DataOciRecoveryProtectedDatabasesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList">DataOciRecoveryProtectedDatabasesFilterList</a>

---

##### `protectedDatabaseCollection`<sup>Required</sup> <a name="protectedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectedDatabaseCollection"></a>

```typescript
public readonly protectedDatabaseCollection: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciRecoveryProtectedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `protectionPolicyIdInput`<sup>Optional</sup> <a name="protectionPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyIdInput"></a>

```typescript
public readonly protectionPolicyIdInput: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetIdInput`<sup>Optional</sup> <a name="recoveryServiceSubnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetIdInput"></a>

```typescript
public readonly recoveryServiceSubnetIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protectionPolicyId`<sup>Required</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.protectionPolicyId"></a>

```typescript
public readonly protectionPolicyId: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabases.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabasesConfig <a name="DataOciRecoveryProtectedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabasesConfig: dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId">protectionPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#compartment_id DataOciRecoveryProtectedDatabases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#display_name DataOciRecoveryProtectedDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciRecoveryProtectedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#filter DataOciRecoveryProtectedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#id DataOciRecoveryProtectedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protectionPolicyId`<sup>Optional</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.protectionPolicyId"></a>

```typescript
public readonly protectionPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#protection_policy_id DataOciRecoveryProtectedDatabases#protection_policy_id}.

---

##### `recoveryServiceSubnetId`<sup>Optional</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#recovery_service_subnet_id DataOciRecoveryProtectedDatabases#recovery_service_subnet_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#state DataOciRecoveryProtectedDatabases#state}.

---

### DataOciRecoveryProtectedDatabasesFilter <a name="DataOciRecoveryProtectedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabasesFilter: dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#name DataOciRecoveryProtectedDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#values DataOciRecoveryProtectedDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_databases#regex DataOciRecoveryProtectedDatabases#regex}.

---

### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabasesProtectedDatabaseCollection: dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection = { ... }
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems: dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems = { ... }
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics: dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics = { ... }
```


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets: dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryProtectedDatabasesFilterList <a name="DataOciRecoveryProtectedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get"></a>

```typescript
public get(index: number): DataOciRecoveryProtectedDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciRecoveryProtectedDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>[]

---


### DataOciRecoveryProtectedDatabasesFilterOutputReference <a name="DataOciRecoveryProtectedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciRecoveryProtectedDatabasesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesFilter">DataOciRecoveryProtectedDatabasesFilter</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get"></a>

```typescript
public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs">backupSpaceEstimateInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs">backupSpaceUsedInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds">currentRetentionPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs">dbSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled">isRedoLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays">minimumRecoveryNeededInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds">unprotectedWindowInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupSpaceEstimateInGbs`<sup>Required</sup> <a name="backupSpaceEstimateInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```typescript
public readonly backupSpaceEstimateInGbs: number;
```

- *Type:* number

---

##### `backupSpaceUsedInGbs`<sup>Required</sup> <a name="backupSpaceUsedInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```typescript
public readonly backupSpaceUsedInGbs: number;
```

- *Type:* number

---

##### `currentRetentionPeriodInSeconds`<sup>Required</sup> <a name="currentRetentionPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```typescript
public readonly currentRetentionPeriodInSeconds: number;
```

- *Type:* number

---

##### `dbSizeInGbs`<sup>Required</sup> <a name="dbSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.dbSizeInGbs"></a>

```typescript
public readonly dbSizeInGbs: number;
```

- *Type:* number

---

##### `isRedoLogsEnabled`<sup>Required</sup> <a name="isRedoLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.isRedoLogsEnabled"></a>

```typescript
public readonly isRedoLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minimumRecoveryNeededInDays`<sup>Required</sup> <a name="minimumRecoveryNeededInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```typescript
public readonly minimumRecoveryNeededInDays: number;
```

- *Type:* number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `unprotectedWindowInSeconds`<sup>Required</sup> <a name="unprotectedWindowInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```typescript
public readonly unprotectedWindowInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetrics</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize">databaseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule">deletionSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails">healthDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource">isReadOnlyResource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped">isRedoLogsShipped</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime">policyLockedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId">protectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets">recoveryServiceSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName">vpcUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseSize`<sup>Required</sup> <a name="databaseSize" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.databaseSize"></a>

```typescript
public readonly databaseSize: string;
```

- *Type:* string

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deletionSchedule`<sup>Required</sup> <a name="deletionSchedule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.deletionSchedule"></a>

```typescript
public readonly deletionSchedule: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `healthDetails`<sup>Required</sup> <a name="healthDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.healthDetails"></a>

```typescript
public readonly healthDetails: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isReadOnlyResource`<sup>Required</sup> <a name="isReadOnlyResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isReadOnlyResource"></a>

```typescript
public readonly isReadOnlyResource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRedoLogsShipped`<sup>Required</sup> <a name="isRedoLogsShipped" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.isRedoLogsShipped"></a>

```typescript
public readonly isRedoLogsShipped: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.metrics"></a>

```typescript
public readonly metrics: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsMetricsList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `policyLockedDateTime`<sup>Required</sup> <a name="policyLockedDateTime" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.policyLockedDateTime"></a>

```typescript
public readonly policyLockedDateTime: string;
```

- *Type:* string

---

##### `protectionPolicyId`<sup>Required</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.protectionPolicyId"></a>

```typescript
public readonly protectionPolicyId: string;
```

- *Type:* string

---

##### `recoveryServiceSubnets`<sup>Required</sup> <a name="recoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.recoveryServiceSubnets"></a>

```typescript
public readonly recoveryServiceSubnets: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vpcUserName`<sup>Required</sup> <a name="vpcUserName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.vpcUserName"></a>

```typescript
public readonly vpcUserName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItems</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get"></a>

```typescript
public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsRecoveryServiceSubnets</a>

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get"></a>

```typescript
public get(index: number): DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference <a name="DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabases.DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection">DataOciRecoveryProtectedDatabasesProtectedDatabaseCollection</a>

---



