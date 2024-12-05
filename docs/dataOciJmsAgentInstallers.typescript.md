# `dataOciJmsAgentInstallers` Submodule <a name="`dataOciJmsAgentInstallers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsAgentInstallers <a name="DataOciJmsAgentInstallers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers oci_jms_agent_installers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsAgentInstallers.DataOciJmsAgentInstallers(scope: Construct, id: string, config?: DataOciJmsAgentInstallersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig">DataOciJmsAgentInstallersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig">DataOciJmsAgentInstallersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFleetId">resetFleetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetPlatformArchitecture">resetPlatformArchitecture</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciJmsAgentInstallersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFleetId` <a name="resetFleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetFleetId"></a>

```typescript
public resetFleetId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetOsFamily"></a>

```typescript
public resetOsFamily(): void
```

##### `resetPlatformArchitecture` <a name="resetPlatformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.resetPlatformArchitecture"></a>

```typescript
public resetPlatformArchitecture(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsAgentInstallers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isConstruct"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformElement"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformDataSource"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsAgentInstallers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsAgentInstallers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsAgentInstallers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsAgentInstallers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.agentInstallerCollection">agentInstallerCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList">DataOciJmsAgentInstallersAgentInstallerCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList">DataOciJmsAgentInstallersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamilyInput">osFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitectureInput">platformArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitecture">platformArchitecture</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agentInstallerCollection`<sup>Required</sup> <a name="agentInstallerCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.agentInstallerCollection"></a>

```typescript
public readonly agentInstallerCollection: DataOciJmsAgentInstallersAgentInstallerCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList">DataOciJmsAgentInstallersAgentInstallerCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filter"></a>

```typescript
public readonly filter: DataOciJmsAgentInstallersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList">DataOciJmsAgentInstallersFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciJmsAgentInstallersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>[]

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamilyInput"></a>

```typescript
public readonly osFamilyInput: string;
```

- *Type:* string

---

##### `platformArchitectureInput`<sup>Optional</sup> <a name="platformArchitectureInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitectureInput"></a>

```typescript
public readonly platformArchitectureInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `platformArchitecture`<sup>Required</sup> <a name="platformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.platformArchitecture"></a>

```typescript
public readonly platformArchitecture: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsAgentInstallersAgentInstallerCollection <a name="DataOciJmsAgentInstallersAgentInstallerCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsAgentInstallersAgentInstallerCollection: dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection = { ... }
```


### DataOciJmsAgentInstallersAgentInstallerCollectionItems <a name="DataOciJmsAgentInstallersAgentInstallerCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsAgentInstallersAgentInstallerCollectionItems: dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems = { ... }
```


### DataOciJmsAgentInstallersConfig <a name="DataOciJmsAgentInstallersConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsAgentInstallersConfig: dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#compartment_id DataOciJmsAgentInstallers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#fleet_id DataOciJmsAgentInstallers#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#id DataOciJmsAgentInstallers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.osFamily">osFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#os_family DataOciJmsAgentInstallers#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.platformArchitecture">platformArchitecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#platform_architecture DataOciJmsAgentInstallers#platform_architecture}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#compartment_id DataOciJmsAgentInstallers#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciJmsAgentInstallersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#filter DataOciJmsAgentInstallers#filter}

---

##### `fleetId`<sup>Optional</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#fleet_id DataOciJmsAgentInstallers#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#id DataOciJmsAgentInstallers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#os_family DataOciJmsAgentInstallers#os_family}.

---

##### `platformArchitecture`<sup>Optional</sup> <a name="platformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersConfig.property.platformArchitecture"></a>

```typescript
public readonly platformArchitecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#platform_architecture DataOciJmsAgentInstallers#platform_architecture}.

---

### DataOciJmsAgentInstallersFilter <a name="DataOciJmsAgentInstallersFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsAgentInstallersFilter: dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#name DataOciJmsAgentInstallers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#values DataOciJmsAgentInstallers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#regex DataOciJmsAgentInstallers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#name DataOciJmsAgentInstallers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#values DataOciJmsAgentInstallers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_agent_installers#regex DataOciJmsAgentInstallers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsAgentInstallersAgentInstallerCollectionItemsList <a name="DataOciJmsAgentInstallersAgentInstallerCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference <a name="DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerDescription">agentInstallerDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerId">agentInstallerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerVersion">agentInstallerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.approximateFileSizeInBytes">approximateFileSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.platformArchitecture">platformArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems">DataOciJmsAgentInstallersAgentInstallerCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentInstallerDescription`<sup>Required</sup> <a name="agentInstallerDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerDescription"></a>

```typescript
public readonly agentInstallerDescription: string;
```

- *Type:* string

---

##### `agentInstallerId`<sup>Required</sup> <a name="agentInstallerId" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerId"></a>

```typescript
public readonly agentInstallerId: string;
```

- *Type:* string

---

##### `agentInstallerVersion`<sup>Required</sup> <a name="agentInstallerVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentInstallerVersion"></a>

```typescript
public readonly agentInstallerVersion: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `approximateFileSizeInBytes`<sup>Required</sup> <a name="approximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.approximateFileSizeInBytes"></a>

```typescript
public readonly approximateFileSizeInBytes: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `platformArchitecture`<sup>Required</sup> <a name="platformArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.platformArchitecture"></a>

```typescript
public readonly platformArchitecture: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsAgentInstallersAgentInstallerCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItems">DataOciJmsAgentInstallersAgentInstallerCollectionItems</a>

---


### DataOciJmsAgentInstallersAgentInstallerCollectionList <a name="DataOciJmsAgentInstallersAgentInstallerCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.get"></a>

```typescript
public get(index: number): DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference <a name="DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList">DataOciJmsAgentInstallersAgentInstallerCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection">DataOciJmsAgentInstallersAgentInstallerCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsAgentInstallersAgentInstallerCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionItemsList">DataOciJmsAgentInstallersAgentInstallerCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsAgentInstallersAgentInstallerCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersAgentInstallerCollection">DataOciJmsAgentInstallersAgentInstallerCollection</a>

---


### DataOciJmsAgentInstallersFilterList <a name="DataOciJmsAgentInstallersFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.get"></a>

```typescript
public get(index: number): DataOciJmsAgentInstallersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsAgentInstallersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>[]

---


### DataOciJmsAgentInstallersFilterOutputReference <a name="DataOciJmsAgentInstallersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciJmsAgentInstallers } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsAgentInstallersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsAgentInstallers.DataOciJmsAgentInstallersFilter">DataOciJmsAgentInstallersFilter</a>

---



