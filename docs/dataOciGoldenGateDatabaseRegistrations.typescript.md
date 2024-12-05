# `dataOciGoldenGateDatabaseRegistrations` Submodule <a name="`dataOciGoldenGateDatabaseRegistrations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDatabaseRegistrations <a name="DataOciGoldenGateDatabaseRegistrations" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations oci_golden_gate_database_registrations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations(scope: Construct, id: string, config: DataOciGoldenGateDatabaseRegistrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig">DataOciGoldenGateDatabaseRegistrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig">DataOciGoldenGateDatabaseRegistrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGoldenGateDatabaseRegistrationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDatabaseRegistrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGoldenGateDatabaseRegistrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGoldenGateDatabaseRegistrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGoldenGateDatabaseRegistrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDatabaseRegistrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.databaseRegistrationCollection">databaseRegistrationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList">DataOciGoldenGateDatabaseRegistrationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `databaseRegistrationCollection`<sup>Required</sup> <a name="databaseRegistrationCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.databaseRegistrationCollection"></a>

```typescript
public readonly databaseRegistrationCollection: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filter"></a>

```typescript
public readonly filter: DataOciGoldenGateDatabaseRegistrationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList">DataOciGoldenGateDatabaseRegistrationsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGoldenGateDatabaseRegistrationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDatabaseRegistrationsConfig <a name="DataOciGoldenGateDatabaseRegistrationsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDatabaseRegistrationsConfig: dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGoldenGateDatabaseRegistrationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#filter DataOciGoldenGateDatabaseRegistrations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}.

---

### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection: dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection = { ... }
```


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems: dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems = { ... }
```


### DataOciGoldenGateDatabaseRegistrationsFilter <a name="DataOciGoldenGateDatabaseRegistrationsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

const dataOciGoldenGateDatabaseRegistrationsFilter: dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#name DataOciGoldenGateDatabaseRegistrations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#values DataOciGoldenGateDatabaseRegistrations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#regex DataOciGoldenGateDatabaseRegistrations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#name DataOciGoldenGateDatabaseRegistrations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#values DataOciGoldenGateDatabaseRegistrations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#regex DataOciGoldenGateDatabaseRegistrations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.rcePrivateIp">rcePrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretCompartmentId">secretCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.wallet">wallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `rcePrivateIp`<sup>Required</sup> <a name="rcePrivateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.rcePrivateIp"></a>

```typescript
public readonly rcePrivateIp: string;
```

- *Type:* string

---

##### `secretCompartmentId`<sup>Required</sup> <a name="secretCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretCompartmentId"></a>

```typescript
public readonly secretCompartmentId: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems</a>

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection</a>

---


### DataOciGoldenGateDatabaseRegistrationsFilterList <a name="DataOciGoldenGateDatabaseRegistrationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get"></a>

```typescript
public get(index: number): DataOciGoldenGateDatabaseRegistrationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDatabaseRegistrationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>[]

---


### DataOciGoldenGateDatabaseRegistrationsFilterOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGoldenGateDatabaseRegistrations } from 'rhizo-co-terraform-provider-oci'

new dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGoldenGateDatabaseRegistrationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter">DataOciGoldenGateDatabaseRegistrationsFilter</a>

---



