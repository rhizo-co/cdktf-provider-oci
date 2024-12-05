# `dataOciServiceManagerProxyServiceEnvironments` Submodule <a name="`dataOciServiceManagerProxyServiceEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceManagerProxyServiceEnvironments <a name="DataOciServiceManagerProxyServiceEnvironments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments oci_service_manager_proxy_service_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments(scope: Construct, id: string, config: DataOciServiceManagerProxyServiceEnvironmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig">DataOciServiceManagerProxyServiceEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig">DataOciServiceManagerProxyServiceEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId">resetServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType">resetServiceEnvironmentType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciServiceManagerProxyServiceEnvironmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServiceEnvironmentId` <a name="resetServiceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId"></a>

```typescript
public resetServiceEnvironmentId(): void
```

##### `resetServiceEnvironmentType` <a name="resetServiceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType"></a>

```typescript
public resetServiceEnvironmentType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceManagerProxyServiceEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceManagerProxyServiceEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceManagerProxyServiceEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection">serviceEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput">serviceEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput">serviceEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId">serviceEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType">serviceEnvironmentType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter"></a>

```typescript
public readonly filter: DataOciServiceManagerProxyServiceEnvironmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a>

---

##### `serviceEnvironmentCollection`<sup>Required</sup> <a name="serviceEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection"></a>

```typescript
public readonly serviceEnvironmentCollection: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciServiceManagerProxyServiceEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceEnvironmentIdInput`<sup>Optional</sup> <a name="serviceEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput"></a>

```typescript
public readonly serviceEnvironmentIdInput: string;
```

- *Type:* string

---

##### `serviceEnvironmentTypeInput`<sup>Optional</sup> <a name="serviceEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput"></a>

```typescript
public readonly serviceEnvironmentTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceEnvironmentId`<sup>Required</sup> <a name="serviceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId"></a>

```typescript
public readonly serviceEnvironmentId: string;
```

- *Type:* string

---

##### `serviceEnvironmentType`<sup>Required</sup> <a name="serviceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType"></a>

```typescript
public readonly serviceEnvironmentType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceManagerProxyServiceEnvironmentsConfig <a name="DataOciServiceManagerProxyServiceEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceManagerProxyServiceEnvironmentsConfig: dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId">serviceEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType">serviceEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciServiceManagerProxyServiceEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#filter DataOciServiceManagerProxyServiceEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceEnvironmentId`<sup>Optional</sup> <a name="serviceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId"></a>

```typescript
public readonly serviceEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}.

---

##### `serviceEnvironmentType`<sup>Optional</sup> <a name="serviceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType"></a>

```typescript
public readonly serviceEnvironmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}.

---

### DataOciServiceManagerProxyServiceEnvironmentsFilter <a name="DataOciServiceManagerProxyServiceEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceManagerProxyServiceEnvironmentsFilter: dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}.

---

### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection: dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection = { ... }
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems: dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems = { ... }
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition: dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition = { ... }
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints: dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceManagerProxyServiceEnvironmentsFilterList <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceManagerProxyServiceEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>[]

---


### DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceManagerProxyServiceEnvironmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter">DataOciServiceManagerProxyServiceEnvironmentsFilter</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl">consoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition">serviceDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints">serviceEnvironmentEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl"></a>

```typescript
public readonly consoleUrl: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceDefinition`<sup>Required</sup> <a name="serviceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition"></a>

```typescript
public readonly serviceDefinition: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a>

---

##### `serviceEnvironmentEndpoints`<sup>Required</sup> <a name="serviceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints"></a>

```typescript
public readonly serviceEnvironmentEndpoints: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get"></a>

```typescript
public get(index: number): DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName">shortDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `shortDisplayName`<sup>Required</sup> <a name="shortDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName"></a>

```typescript
public readonly shortDisplayName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get"></a>

```typescript
public get(index: number): DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get"></a>

```typescript
public get(index: number): DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciServiceManagerProxyServiceEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a>

---



